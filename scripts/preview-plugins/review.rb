# Keep the proofreading comparison local to the preview (never published).
Jekyll::Hooks.register :site, :post_write do |site|
  review = File.join(site.source, '.preview', 'proofreading-review.html')
  if File.file?(review)
    File.write(File.join(site.dest, 'proofreading-review.html'), File.read(review))
  end
end
