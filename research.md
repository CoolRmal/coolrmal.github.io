---
layout: page
title: Research
description: "Research papers, expository articles, and Lean formalizations by Yongxi (Aaron) Lin in analysis, geometry, probability, and number theory."
permalink: /research/
nav: research
---

<h2 id="formalizations">Lean formalizations and related articles</h2>

<p class="repo-intro">
  More projects are on <a href="https://github.com/CoolRmal" target="_blank" rel="noopener noreferrer">GitHub</a>.
  During my studies, I have often encountered errors and missing details in the literature and
  textbooks. As something of a perfectionist, I find this especially frustrating: I care deeply
  about complete, rigorous, and logically sound arguments. This is what led me to begin using
  formal verification tools such as Lean. I use LLMs and Lean formalization extensively in all of
  the repositories below. I do not claim to fully understand all of the mathematical content they
  contain, and I am acutely aware that
  verification in Lean is not the same as human understanding. I value mathematics that humans
  can understand, and at present, LLM-generated proofs are generally not readable mathematics.
  For each repository, I therefore try to digest the result myself and write an article that
  presents the proof&mdash;or at least summarizes the main idea of the AI-generated argument&mdash;in
  a form that a human can readily follow. This takes time, so I appreciate your patience if you
  are interested in any of the results below.
</p>

<div class="repo-grid">

<div class="repo-card" id="partial-balayage-lean">
  <h3 class="entry-title"><a href="https://github.com/CoolRmal/partial-balayage-lean" target="_blank" rel="noopener noreferrer">partial-balayage-lean</a></h3>
  <p class="entry-meta">Lean 4 + Mathlib</p>
  <p class="repo-description">
    Formalizes fifteen weak-type bounds using two partial balayage principles, covering
    Riesz and Beurling transforms, full and traceless Hessians, Leray and
    gradient projections, centred intervals and Euclidean balls, and Poisson and heat maximal
    operators.
  </p>
  <p class="article-links">
    <a href="{{ '/articles/two-partial-balayage-principles/' | relative_url }}">Two partial balayage principles for weak-type estimates</a>
    &middot; <a href="{{ '/assets/papers/two-partial-balayage-principles.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer">PDF</a>
    <br><span class="entry-meta">Yongxi Lin</span>
  </p>
</div>

<div class="repo-card" id="fluid-singular-sets">
  <h3 class="entry-title"><a href="https://github.com/CoolRmal/FluidSingularSets" target="_blank" rel="noopener noreferrer">FluidSingularSets</a></h3>
  <p class="entry-meta">Lean 4 + Mathlib &middot; <span class="badge">registered</span> <a href="https://palomar-registry.org/entry.html?id=PALOMAR-2026-10-06-000006&amp;version=1" target="_blank" rel="noopener noreferrer">PALOMAR-2026-10-06-000006</a></p>
  <p class="repo-description">
    Studies the interior singular set of unforced three-dimensional suitable weak
    Navier&ndash;Stokes solutions.
    Proves Hausdorff nullity for logarithmic gauges at every finite iteration depth and the local
    upper parabolic box-dimension bound 25/23.
  </p>
</div>

<div class="repo-card">
  <h3 class="entry-title"><a href="https://github.com/CoolRmal/odd-zeta-irrationality" target="_blank" rel="noopener noreferrer">odd-zeta-irrationality</a></h3>
  <p class="entry-meta">Lean 4 + Mathlib</p>
  <p class="repo-description">
    Ap&eacute;ry proved <span class="math inline">$$\zeta(3)$$</span> irrational in 1979. For larger odd arguments no single value is
    known to be irrational; what can be proved is that some member of a finite list must be.
    Formalizes two such statements, following Zudilin's higher-derivative hypergeometric
    construction: at least one of <span class="math inline">$$\zeta(7),\zeta(9),\dots,\zeta(21)$$</span> is irrational, and at least
    one of <span class="math inline">$$\zeta(9),\zeta(11),\dots,\zeta(33)$$</span>.
  </p>
</div>

<div class="repo-card">
  <h3 class="entry-title"><a href="https://github.com/CoolRmal/erdos455-convex-primes" target="_blank" rel="noopener noreferrer">erdos455-convex-primes</a></h3>
  <p class="entry-meta">Lean 4 + Mathlib</p>
  <p class="repo-description">
    <a href="https://www.erdosproblems.com/455" target="_blank" rel="noopener noreferrer">Erd&#337;s Problem #455</a>
    asks whether a convex sequence of primes <span class="math inline">$$q_0\lt q_1\lt\cdots$$</span>, one with non-decreasing gaps,
    must satisfy <span class="math inline">$$q_n/n^2\to\infty$$</span>. Richter (1976) proved <span class="math inline">$$\liminf q_n/n^2\ge 0.352$$</span>.
    Proves <span class="math inline">$$\liminf q_n/n^2 \gt 0.864289$$</span>, from a max-plus certificate whose roughly
    <span class="math inline">$$5\cdot 10^{10}$$</span> elementary operations are evaluated by the Lean kernel.
  </p>
</div>

<div class="repo-card">
  <h3 class="entry-title"><a href="https://github.com/CoolRmal/erdos5-limit-points" target="_blank" rel="noopener noreferrer">erdos5-limit-points</a></h3>
  <p class="entry-meta">Lean 4 + Mathlib</p>
  <p class="repo-description">
    <a href="https://www.erdosproblems.com/5" target="_blank" rel="noopener noreferrer">Erd&#337;s Problem #5</a>
    asks whether every positive real is a limit point of the normalised prime gaps
    <span class="math inline">$$(p_{n+1}-p_n)/\log n$$</span>. Merikoski (2020) showed that this limit-point set has the four-point
    property, which forces lower density <span class="math inline">$$\ge 1/3$$</span>.
    Proves that every set with the four-point property has lower density
    <span class="math inline">$$\ge 25/74 = 1/3 + 1/222$$</span>, so <span class="math inline">$$1/3$$</span> is not asymptotically sharp.
  </p>
</div>

<div class="repo-card">
  <h3 class="entry-title"><a href="https://github.com/CoolRmal/FavardLength" target="_blank" rel="noopener noreferrer">FavardLength</a></h3>
  <p class="entry-meta">Lean 4 + Mathlib &middot; <span class="badge">registered</span> <a href="https://palomar-registry.org/entry?id=PALOMAR-2026-09-24-000001&amp;version=1" target="_blank" rel="noopener noreferrer">PALOMAR-2026-09-24-000001</a></p>
  <p class="repo-description">
    The Favard length of a planar set is its average projection length. For the four-corner Cantor
    approximants <span class="math inline">$$K_n$$</span> it tends to <span class="math inline">$$0$$</span>, and <span class="math inline">$$\alpha_{\mathrm{Fav}}$$</span> is the decay exponent: the
    supremum of the <span class="math inline">$$a$$</span> with <span class="math inline">$$\mathrm{Fav}(K_n)\le C n^{-a}$$</span>. Nazarov&ndash;Peres&ndash;Volberg (2010)
    proved <span class="math inline">$$\alpha_{\mathrm{Fav}}\ge 1/6$$</span> and C. Marshall (2026) <span class="math inline">$$\ge 1/5$$</span>; Bateman&ndash;Volberg
    (2010) give <span class="math inline">$$\alpha_{\mathrm{Fav}}\le 1$$</span>.
    Proves <span class="math inline">$$\alpha_{\mathrm{Fav}}\ge 1/4$$</span>, from Marshall's combinatorics in endpoint form plus a
    joint negative moment of the low-frequency product.
  </p>
</div>

<div class="repo-card" id="falconer-packing">
  <h3 class="entry-title"><a href="https://github.com/CoolRmal/falconer-packing" target="_blank" rel="noopener noreferrer">falconer-packing</a></h3>
  <p class="entry-meta">Lean 4 + Mathlib</p>
  <p class="repo-description">
    For a planar Borel set <span class="math inline">$$E$$</span>, write <span class="math inline">$$d=\dim_H E$$</span> and let <span class="math inline">$$\Delta_y(E)$$</span> be the set of
    distances from <span class="math inline">$$y$$</span> to points of <span class="math inline">$$E$$</span>.
    Proves <span class="math inline">$$|\Delta_y(E)|\gt0$$</span> for some <span class="math inline">$$y\in E$$</span> when <span class="math inline">$$1\lt d\le5/4$$</span> and
    <span class="math inline">$$\dim_P E\lt B_{\mathrm H}(d)$$</span>, using only standard axioms.
  </p>
</div>

<div class="repo-card">
  <h3 class="entry-title"><a href="https://github.com/CoolRmal/centered-maximal-constant" target="_blank" rel="noopener noreferrer">centered-maximal-constant</a></h3>
  <p class="entry-meta">Lean 4 + Mathlib &middot; <span class="badge">registered</span> <a href="https://palomar-registry.org/entry?id=PALOMAR-2026-09-19-000002&amp;version=3" target="_blank" rel="noopener noreferrer">PALOMAR-2026-09-19-000002</a></p>
  <p class="repo-description">
    <span class="math inline">$$c_2$$</span> is the least <span class="math inline">$$C$$</span> with <span class="math inline">$$\alpha\,\lvert\{Mf\gt\alpha\}\rvert\le C\lVert f\rVert_1$$</span> for the
    centred Hardy&ndash;Littlewood maximal operator over squares in the plane. The best known bounds
    were <span class="math inline">$$1.6212\le c_2\le 4$$</span>, from Aldaz (2000) and the covering argument.
    Proves <span class="math inline">$$1.6855\le c_2\le 3.879$$</span>.
    For Euclidean balls, also proves <span class="math inline">$$c_2^{\mathrm{ball}}\le e$$</span> and <span class="math inline">$$c_n^{\mathrm{ball}}\le(n/2)^{n/(n-2)}$$</span> for <span class="math inline">$$n\ge3$$</span>.
  </p>
  <p class="article-links">
    <span class="badge">expository note</span>
    <a href="{{ '/assets/papers/c2-less-than-4.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer">c<sub>2</sub> &lt; 4 (PDF)</a>
    <br><span class="entry-meta">Yongxi Lin</span>
  </p>
</div>

<div class="repo-card">
  <h3 class="entry-title"><a href="https://github.com/CoolRmal/BerryEsseen" target="_blank" rel="noopener noreferrer">BerryEsseen</a></h3>
  <p class="entry-meta">Lean 4 + Mathlib</p>
  <p class="repo-description">
    <span class="math inline">$$C$$</span> is the least constant with <span class="math inline">$$\sup_x\lvert F_n(x)-\Phi(x)\rvert\le C\beta/\sqrt n$$</span> for the
    distribution function <span class="math inline">$$F_n$$</span> of a normalized sum of <span class="math inline">$$n$$</span> i.i.d. variables with third absolute
    moment <span class="math inline">$$\beta$$</span>. Esseen (1956): <span class="math inline">$$C\ge 0.4097$$</span>; best published upper bound <span class="math inline">$$0.4690$$</span> (Shevtsova, 2013).
    Proves <span class="math inline">$$0.4\le C\le 0.423$$</span> in Lean, with the help of <code>native_decide</code>.
  </p>
</div>

<div class="repo-card">
  <h3 class="entry-title"><a href="https://github.com/CoolRmal/NKBesicovitch" target="_blank" rel="noopener noreferrer">NKBesicovitch</a></h3>
  <p class="entry-meta">Lean 4 + Mathlib &middot; <span class="badge">registered</span> <a href="https://palomar-registry.org/entry?id=PALOMAR-2026-09-19-000001&amp;version=1" target="_blank" rel="noopener noreferrer">PALOMAR-2026-09-19-000001</a></p>
  <p class="repo-description">
    An <span class="math inline">$$(n,k)$$</span>-Besicovitch set contains a unit <span class="math inline">$$k$$</span>-disk in every <span class="math inline">$$k$$</span>-direction of <span class="math inline">$$\mathbb{R}^n$$</span>;
    conjecturally it has positive volume when <span class="math inline">$$2\le k\lt n$$</span>. Oberlin (2010): positive volume when
    <span class="math inline">$$n\lt(1+\sqrt2)^{k-1}+k$$</span>, and <span class="math inline">$$\dim_H E\ge n-(n-k)/(1+\sqrt2)^k$$</span>.
    Proves both with <span class="math inline">$$1+\sqrt2\approx 2.4142$$</span> replaced by <span class="math inline">$$p_c\approx 2.4812$$</span>, the root in <span class="math inline">$$(2,3)$$</span>
    of <span class="math inline">$$p^3-2p^2-2p+2$$</span>.
  </p>
</div>

<div class="repo-card">
  <h3 class="entry-title"><a href="https://github.com/CoolRmal/Besicovitchs-1-2" target="_blank" rel="noopener noreferrer">Besicovitchs-1-2</a></h3>
  <p class="entry-meta">Lean 4 + Mathlib &middot; <span class="badge">registered</span> <a href="https://palomar-registry.org/entry?id=PALOMAR-2026-09-02-000011&amp;version=2" target="_blank" rel="noopener noreferrer">PALOMAR-2026-09-02-000011</a></p>
  <p class="repo-description">
    <span class="math inline">$$\sigma_1(X)$$</span> is the least <span class="math inline">$$\beta$$</span> forcing every set of finite length in <span class="math inline">$$X$$</span> with lower density
    <span class="math inline">$$\ge\beta$$</span> a.e. to be countably <span class="math inline">$$1$$</span>-rectifiable; Besicovitch conjectured <span class="math inline">$$\sigma_1(\mathbb{R}^2)=\tfrac12$$</span>.
    In the plane the upper bound fell from <span class="math inline">$$1-10^{-2576}$$</span> (Besicovitch, 1928) to <span class="math inline">$$3/4$$</span> (Besicovitch,
    1938), then <span class="math inline">$$(2+\sqrt{46})/12=0.73186$$</span> (Preiss&ndash;Ti&scaron;er, 1992), <span class="math inline">$$0.72655$$</span> (Schechter,
    1998) and <span class="math inline">$$0.7$$</span> (De Lellis et al., 2024).
    Proves <span class="math inline">$$\sigma_1(H)\le 0.6934$$</span> for every real Hilbert space <span class="math inline">$$H$$</span>, and <span class="math inline">$$\tfrac12\le\sigma_1(\mathbb{R}^2)$$</span>.
  </p>
  <p class="article-links">
    <span class="badge">progress report</span>
    <a href="{{ '/assets/papers/besicovitch-1-2-progress-report.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer">New Progress on Besicovitch&rsquo;s 1/2 Problem (PDF)</a>
    <br><span class="entry-meta">Yongxi Lin</span>
  </p>
</div>

</div>

<h2 id="papers">Papers and preprints</h2>

<div class="entry">
  <h3 class="entry-title">Optimal Sparse Bounds and Commutator Characterizations Without Doubling</h3>
  <p class="entry-meta">F. D'Emilio, <strong>Y. Lin</strong>, N. A. Wagner, B. D. Wick &middot; 2025</p>
  <p>
    <span class="badge">preprint</span>
    <a href="https://arxiv.org/abs/2510.26505" target="_blank" rel="noopener noreferrer">arXiv:2510.26505</a>
  </p>
</div>

{% include inline-math.html %}
