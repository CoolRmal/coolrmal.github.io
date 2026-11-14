# Refresh after every completed build, including changes to static assets.
Jekyll::Hooks.register :site, :post_render do |site|
  version = Process.clock_gettime(Process::CLOCK_MONOTONIC).to_s
  site.config["preview_version"] = version
  script = <<~HTML
    <script>
    (function () {
      const version = #{JSON.dump(version)};
      setInterval(function () {
        fetch("/preview-version.json", { cache: "no-store" })
          .then(function (response) { return response.json(); })
          .then(function (current) {
            if (current !== version) window.location.reload();
          })
          .catch(function () {});
      }, 750);
    })();
    </script>
  HTML
  (site.pages + site.collections.values.flat_map(&:docs)).each do |page|
    next unless page.output_ext == ".html"
    page.output = page.output.sub("</body>", script + "</body>")
  end
end

Jekyll::Hooks.register :site, :post_write do |site|
  File.write(
    File.join(site.dest, "preview-version.json"),
    JSON.dump(site.config["preview_version"])
  )
end
