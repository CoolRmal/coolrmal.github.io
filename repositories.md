---
layout: page
title: Repositories
description: Lean formalization projects I maintain. Everything else is on <a href="https://github.com/CoolRmal" target="_blank" rel="noopener noreferrer">GitHub</a>.
permalink: /repositories/
nav: repositories
---

<div class="repo-grid">

<div class="repo-card">
  <h3 class="entry-title"><a href="https://github.com/CoolRmal/Besicovitchs-1-2" target="_blank" rel="noopener noreferrer">Besicovitchs-1-2</a></h3>
  <p class="entry-meta">Lean 4 + Mathlib &middot; <span class="badge">registered</span> <a href="https://palomar-registry.org/entry?id=PALOMAR-2026-09-02-000011&amp;version=1" target="_blank" rel="noopener noreferrer">PALOMAR-2026-09-02-000011</a> (planar statement)</p>
  <p>
    $\sigma_1(X)$ is the least $\beta$ such that every set of finite length in $X$ with lower density
    $\ge\beta$ a.e. is countably $1$-rectifiable; Besicovitch conjectured $\sigma_1(\mathbb{R}^2)=\tfrac12$.
    Upper bounds: $3/4$ (Besicovitch, 1938), $0.7319$ (Preiss&ndash;Ti&scaron;er, 1992), $0.7$
    (De Lellis et al., 2024).
  </p>
  <p class="repo-result">
    Proves $\sigma_1(H)\le 0.6934$ for every real Hilbert space $H$, with no dimension or separability
    assumption, and $\tfrac12\le\sigma_1(\mathbb{R}^2)$.
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
  <p class="entry-meta">Lean 4 + Mathlib &middot; <span class="badge">registered</span> <a href="https://palomar-registry.org/entry?id=PALOMAR-2026-09-19-000002&amp;version=1" target="_blank" rel="noopener noreferrer">PALOMAR-2026-09-19-000002</a></p>
  <p>
    $c_2$ is the least $C$ with $\alpha\,\lvert\{Mf\gt\alpha\}\rvert\le C\lVert f\rVert_1$ for all
    $f\in L^1(\mathbb{R}^2)$ and $\alpha\gt 0$, where $M$ is the centred Hardy&ndash;Littlewood maximal
    operator over squares. Covering gives $c_2\le 4$; best previous lower bound $1.6212$ (Aldaz, 2000).
  </p>
  <p class="repo-result">
    Proves $c_2\ge 1.6855$, from a lattice with two alternating masses, and $c_d\le 2^d$ in every
    dimension.
  </p>
</div>

</div>
