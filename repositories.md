---
layout: page
title: Repositories
description: Lean formalization projects I maintain. Everything else is on <a href="https://github.com/CoolRmal" target="_blank" rel="noopener noreferrer">GitHub</a>.
permalink: /repositories/
nav: repositories
---

<p class="repo-intro">
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

<div class="repo-card">
  <h3 class="entry-title"><a href="https://github.com/CoolRmal/Besicovitchs-1-2" target="_blank" rel="noopener noreferrer">Besicovitchs-1-2</a></h3>
  <p class="entry-meta">Lean 4 + Mathlib &middot; <span class="badge">registered</span> <a href="https://palomar-registry.org/entry?id=PALOMAR-2026-09-02-000011&amp;version=2" target="_blank" rel="noopener noreferrer">PALOMAR-2026-09-02-000011</a></p>
  <p>
    $\sigma_1(X)$ is the least $\beta$ forcing every set of finite length in $X$ with lower density
    $\ge\beta$ a.e. to be countably $1$-rectifiable; Besicovitch conjectured $\sigma_1(\mathbb{R}^2)=\tfrac12$.
    In the plane the upper bound fell from $1-10^{-2576}$ (Besicovitch, 1928) to $3/4$ (Besicovitch,
    1938), then $(2+\sqrt{46})/12=0.73186$ (Preiss&ndash;Ti&scaron;er, 1992), $0.72655$ (Schechter,
    1998) and $0.7$ (De Lellis et al., 2024).
  </p>
  <p class="repo-result">
    Proves $\sigma_1(H)\le 0.6934$ for every real Hilbert space $H$, and $\tfrac12\le\sigma_1(\mathbb{R}^2)$.
    <a href="/assets/papers/besicovitch-1-2-progress-report.pdf" target="_blank" rel="noopener noreferrer">Progress report</a>.
  </p>
</div>

<div class="repo-card">
  <h3 class="entry-title"><a href="https://github.com/CoolRmal/NKBesicovitch" target="_blank" rel="noopener noreferrer">NKBesicovitch</a></h3>
  <p class="entry-meta">Lean 4 + Mathlib &middot; <span class="badge">registered</span> <a href="https://palomar-registry.org/entry?id=PALOMAR-2026-09-19-000001&amp;version=1" target="_blank" rel="noopener noreferrer">PALOMAR-2026-09-19-000001</a></p>
  <p>
    An $(n,k)$-Besicovitch set contains a unit $k$-disk in every $k$-direction of $\mathbb{R}^n$;
    conjecturally it has positive volume when $2\le k\lt n$. Oberlin (2010): positive volume when
    $n\lt(1+\sqrt2)^{k-1}+k$, and $\dim_H E\ge n-(n-k)/(1+\sqrt2)^k$.
  </p>
  <p class="repo-result">
    Proves both with $1+\sqrt2\approx 2.4142$ replaced by $p_c\approx 2.4812$, the root in $(2,3)$
    of $p^3-2p^2-2p+2$.
  </p>
</div>

<div class="repo-card">
  <h3 class="entry-title"><a href="https://github.com/CoolRmal/BerryEsseen" target="_blank" rel="noopener noreferrer">BerryEsseen</a></h3>
  <p class="entry-meta">Lean 4 + Mathlib</p>
  <p>
    $C$ is the least constant with $\sup_x\lvert F_n(x)-\Phi(x)\rvert\le C\beta/\sqrt n$ for the
    distribution function $F_n$ of a normalized sum of $n$ i.i.d. variables with third absolute
    moment $\beta$. Esseen (1956): $C\ge 0.4097$; best published upper bound $0.4690$ (Shevtsova, 2013).
  </p>
  <p class="repo-result">
    Proves $0.4\le C\le 0.423$ in Lean, with the help of <code>native_decide</code>.
  </p>
</div>

<div class="repo-card">
  <h3 class="entry-title"><a href="https://github.com/CoolRmal/centered-maximal-constant" target="_blank" rel="noopener noreferrer">centered-maximal-constant</a></h3>
  <p class="entry-meta">Lean 4 + Mathlib &middot; <span class="badge">registered</span> <a href="https://palomar-registry.org/entry?id=PALOMAR-2026-09-19-000002&amp;version=3" target="_blank" rel="noopener noreferrer">PALOMAR-2026-09-19-000002</a></p>
  <p>
    $c_2$ is the least $C$ with $\alpha\,\lvert\{Mf\gt\alpha\}\rvert\le C\lVert f\rVert_1$ for the
    centred Hardy&ndash;Littlewood maximal operator over squares in the plane. The best known bounds
    were $1.6212\le c_2\le 4$, from Aldaz (2000) and the covering argument.
  </p>
  <p class="repo-result">
    Proves $1.6855\le c_2\le 3.879$.
    <a href="/assets/papers/c2-less-than-4.pdf" target="_blank" rel="noopener noreferrer">Expository note: c<sub>2</sub> &lt; 4 (PDF)</a>.
  </p>
  <p class="repo-result">
    For Euclidean balls, also proves $c_2^{\mathrm{ball}}\le e$ and $c_n^{\mathrm{ball}}\le(n/2)^{n/(n-2)}$ for $n\ge3$.
  </p>
</div>

<div class="repo-card" id="falconer-packing">
  <h3 class="entry-title"><a href="https://github.com/CoolRmal/falconer-packing" target="_blank" rel="noopener noreferrer">falconer-packing</a></h3>
  <p class="entry-meta">Lean 4 + Mathlib</p>
  <p>
    For a planar Borel set $E$, write $d=\dim_H E$ and let $\Delta_y(E)$ be the set of
    distances from $y$ to points of $E$.
  </p>
  <p class="repo-result">
    Proves $|\Delta_y(E)|\gt0$ for some $y\in E$ when $1\lt d\le5/4$ and
    $\dim_P E\lt B_{\mathrm H}(d)$, using only standard axioms.
  </p>
</div>

<div class="repo-card">
  <h3 class="entry-title"><a href="https://github.com/CoolRmal/FavardLength" target="_blank" rel="noopener noreferrer">FavardLength</a></h3>
  <p class="entry-meta">Lean 4 + Mathlib &middot; <span class="badge">registered</span> <a href="https://palomar-registry.org/entry?id=PALOMAR-2026-09-24-000001&amp;version=1" target="_blank" rel="noopener noreferrer">PALOMAR-2026-09-24-000001</a></p>
  <p>
    The Favard length of a planar set is its average projection length. For the four-corner Cantor
    approximants $K_n$ it tends to $0$, and $\alpha_{\mathrm{Fav}}$ is the decay exponent: the
    supremum of the $a$ with $\mathrm{Fav}(K_n)\le C n^{-a}$. Nazarov&ndash;Peres&ndash;Volberg (2010)
    proved $\alpha_{\mathrm{Fav}}\ge 1/6$ and C. Marshall (2026) $\ge 1/5$; Bateman&ndash;Volberg
    (2010) give $\alpha_{\mathrm{Fav}}\le 1$.
  </p>
  <p class="repo-result">
    Proves $\alpha_{\mathrm{Fav}}\ge 1/4$, from Marshall's combinatorics in endpoint form plus a
    joint negative moment of the low-frequency product.
  </p>
</div>

<div class="repo-card">
  <h3 class="entry-title"><a href="https://github.com/CoolRmal/odd-zeta-irrationality" target="_blank" rel="noopener noreferrer">odd-zeta-irrationality</a></h3>
  <p class="entry-meta">Lean 4 + Mathlib</p>
  <p>
    Ap&eacute;ry proved $\zeta(3)$ irrational in 1979. For larger odd arguments no single value is
    known to be irrational; what can be proved is that some member of a finite list must be.
  </p>
  <p class="repo-result">
    Formalizes two such statements, following Zudilin's higher-derivative hypergeometric
    construction: at least one of $\zeta(7),\zeta(9),\dots,\zeta(21)$ is irrational, and at least
    one of $\zeta(9),\zeta(11),\dots,\zeta(33)$.
  </p>
</div>

<div class="repo-card">
  <h3 class="entry-title"><a href="https://github.com/CoolRmal/erdos455-convex-primes" target="_blank" rel="noopener noreferrer">erdos455-convex-primes</a></h3>
  <p class="entry-meta">Lean 4 + Mathlib</p>
  <p>
    <a href="https://www.erdosproblems.com/455" target="_blank" rel="noopener noreferrer">Erd&#337;s Problem #455</a>
    asks whether a convex sequence of primes $q_0\lt q_1\lt\cdots$, one with non-decreasing gaps,
    must satisfy $q_n/n^2\to\infty$. Richter (1976) proved $\liminf q_n/n^2\ge 0.352$.
  </p>
  <p class="repo-result">
    Proves $\liminf q_n/n^2 \gt 0.864289$, from a max-plus certificate whose roughly
    $5\cdot 10^{10}$ elementary operations are evaluated by the Lean kernel.
  </p>
</div>

<div class="repo-card">
  <h3 class="entry-title"><a href="https://github.com/CoolRmal/erdos5-limit-points" target="_blank" rel="noopener noreferrer">erdos5-limit-points</a></h3>
  <p class="entry-meta">Lean 4 + Mathlib</p>
  <p>
    <a href="https://www.erdosproblems.com/5" target="_blank" rel="noopener noreferrer">Erd&#337;s Problem #5</a>
    asks whether every positive real is a limit point of the normalised prime gaps
    $(p_{n+1}-p_n)/\log n$. Merikoski (2020) showed that this limit-point set has the four-point
    property, which forces lower density $\ge 1/3$.
  </p>
  <p class="repo-result">
    Proves that every set with the four-point property has lower density
    $\ge 25/74 = 1/3 + 1/222$, so $1/3$ is not asymptotically sharp.
  </p>
</div>

</div>
