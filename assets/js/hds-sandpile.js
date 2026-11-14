(function () {
  const root = document.querySelector("[data-hds-sandpile]");
  if (!root) return;

  const find = (name) => root.querySelector(`[data-hds-${name}]`);
  const sites = [-2, -1, 0, 1, 2];
  const deposit = 7;
  const capacity = 1;
  const survival = 4 / 5;
  const plotMax = 7.5;
  const roundCount = 16;
  const initial = sites.map((site) => site === 0 ? deposit : 0);
  const incoming = (sent, index) => survival * ((sent[index - 1] ?? 0) + (sent[index + 1] ?? 0)) / 2;
  const makeFrame = (sent) => ({
    sent,
    density: initial.map((mass, index) => mass + incoming(sent, index) - sent[index])
  });
  root.style.setProperty("--hds-cap", `${100 * capacity / plotMax}%`);

  // The exact odometer has support {-1, 0, 1}. The iterates are bounded above
  // by that fixed point, so the displayed window contains every transfer.
  let sent = sites.map(() => 0);
  const frames = [makeFrame(sent)];
  for (let round = 0; round < roundCount; round++) {
    sent = initial.map((mass, index) => Math.max(0, mass + incoming(sent, index) - capacity));
    frames.push(makeFrame(sent));
  }
  const limitIndex = frames.length;
  const denominator = 17;
  frames.push(makeFrame([0, 35, 130, 35, 0].map((value) => value / denominator)));

  const columns = sites.map((site) => {
    const column = document.createElement("div");
    column.className = "hds-column";
    column.innerHTML = '<span class="hds-bar"></span><span class="hds-bar hds-bar-over"></span><span class="hds-density"></span>';
    find("plot").append(column);

    const siteLabel = document.createElement("span");
    siteLabel.textContent = String(site).replace("-", "−");
    find("sites").append(siteLabel);

    const sentLabel = document.createElement("span");
    find("odometer").append(sentLabel);
    return { column, sentLabel, densityLabel: column.querySelector(".hds-density") };
  });

  const slider = find("round");
  const playButton = find("play");
  const stepButton = find("step");
  const status = find("status");
  slider.max = limitIndex;

  let index = 0;
  let timer = null;

  const rounded = (value) => Number(value.toFixed(3)).toString();

  function fraction(value) {
    const numerator = Math.round(value * denominator);
    return numerator % denominator === 0 ? String(numerator / denominator) : `${numerator}/${denominator}`;
  }

  function render() {
    const frame = frames[index];
    const exact = index === limitIndex;
    const frameLabel = exact ? "Exact limit" : `Round ${index}`;
    const total = frame.density.reduce((sum, mass) => sum + mass, 0);
    const format = exact ? fraction : rounded;

    columns.forEach(({ column, sentLabel, densityLabel }, position) => {
      const density = frame.density[position];
      const sentValue = frame.sent[position];
      const kept = Math.min(capacity, density);
      column.style.setProperty("--density-height", `${100 * density / plotMax}%`);
      column.style.setProperty("--kept-height", `${100 * kept / plotMax}%`);
      column.style.setProperty("--excess-height", `${100 * (density - kept) / plotMax}%`);
      densityLabel.textContent = format(density);
      sentLabel.textContent = format(sentValue);
      sentLabel.classList.toggle("hds-sent-positive", sentValue !== 0);
    });

    let note = index % 2 === 0
      ? "The origin is above capacity and sends its excess next."
      : "Sites −1 and 1 are above capacity and send their excess next.";
    if (index === 0) note = "All the mass starts at site 0.";
    if (index === 1) note = "The origin kept 1 unit and sent 6. Its neighbors received 2.4 each.";
    if (index === 2) note = "The neighbors sent their excess. Some mass reached ±2 and some returned to 0.";
    if (index === limitIndex - 1) note = "The bars are close to equilibrium. Advance to see the exact limit.";
    if (exact) note = "The three sites that sent mass are full. Their outer neighbors are below capacity.";

    slider.value = index;
    slider.setAttribute("aria-valuetext", frameLabel);
    stepButton.disabled = exact;
    playButton.textContent = timer !== null ? "Pause" : exact ? "Replay" : "Play";
    find("frame").textContent = frameLabel;
    find("note").textContent = note;
    find("mass").textContent = format(total);
    find("lost").textContent = format(deposit - total);
    if (timer === null) {
      const values = columns.map(({ densityLabel, sentLabel }, i) =>
        `Site ${sites[i]} holds ${densityLabel.textContent} and has sent ${sentLabel.textContent} in total.`);
      status.textContent = [`${frameLabel}. ${note}`, ...values].join(" ");
    }
  }

  function pause() {
    if (timer !== null) clearInterval(timer);
    timer = null;
  }

  function goTo(next) {
    pause();
    index = next;
    render();
  }

  playButton.addEventListener("click", () => {
    if (timer !== null) {
      pause();
    } else {
      if (index === limitIndex) index = 0;
      timer = setInterval(() => {
        index++;
        if (index === limitIndex) pause();
        render();
      }, 570);
    }
    render();
  });
  stepButton.addEventListener("click", () => goTo(Math.min(index + 1, limitIndex)));
  find("reset").addEventListener("click", () => goTo(0));
  find("limit").addEventListener("click", () => goTo(limitIndex));
  slider.addEventListener("input", () => goTo(Number(slider.value)));

  render();
  find("fallback").hidden = true;
  find("interface").hidden = false;
})();
