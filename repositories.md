---
layout: page
title: Repositories
description: Lean formalization projects I maintain.
permalink: /repositories/
nav: repositories
---

<div class="entry">
  <h3 class="entry-title">
    <a href="https://github.com/CoolRmal/Besicovitchs-1-2" target="_blank" rel="noopener noreferrer">Besicovitchs-1-2</a>
  </h3>
  <p class="entry-meta">Lean 4 + Mathlib</p>
  <p>
    For a Borel set $E\subset\mathbb{R}^2$ of finite length, the lower density
    $\Theta^1_*(E,x)=\liminf_{r\downarrow0}\mathcal{H}^1(E\cap B(x,r))/2r$ records how much of
    $E$ a small ball around $x$ sees. If the lower density is large enough at almost every point,
    $E$ is forced to be countably $1$-rectifiable, and $\sigma_1(\mathbb{R}^2)$ denotes the
    smallest threshold for which that is true. Besicovitch's $1/2$-conjecture, still open, is
    that this threshold is exactly $\tfrac12$.
  </p>
  <p>
    The upper bound has come down slowly: $3/4$ (Besicovitch, 1938),
    $(2+\sqrt{46})/12=0.73186\ldots$ (Preiss and Ti&scaron;er, 1992), $0.72655\ldots$
    (Schechter, 1998), and $0.7$ (De Lellis, Glaudo, Massaccesi and Vittone, 2024).
  </p>
  <p>
    This is a machine-checked proof that $\tfrac12\le\sigma_1(\mathbb{R}^2)\le 0.6934$.
    The proof can be found over
    <a href="/2026/09/02/A-Machine-Checked-Bound-of-0.6934-for-Besicovitch's-1_2-Problem.html">here</a>.
  </p>
  <p>
    <span class="badge">registered</span>
    <a href="https://palomar-registry.org/entry?id=PALOMAR-2026-09-02-000011&amp;version=1" target="_blank" rel="noopener noreferrer">Palomar PALOMAR-2026-09-02-000011</a>
  </p>
</div>

<div class="entry">
  <h3 class="entry-title">
    <a href="https://github.com/CoolRmal/NKBesicovitch" target="_blank" rel="noopener noreferrer">NKBesicovitch</a>
  </h3>
  <p class="entry-meta">Lean 4 + Mathlib</p>
  <p>
    An $(n,k)$-Besicovitch set is a subset of $\mathbb{R}^n$ containing a translate of the unit
    $k$-disk in every $k$-dimensional direction. For $k=1$ these are Kakeya sets, which can have
    measure zero; the $(n,k)$-Besicovitch conjecture is that for $2\le k<n$ every measurable such
    set has positive volume.
  </p>
  <p>
    Positive volume was known for $k>n/2$ (Falconer, 1980), then for $n\le 2^{k-1}+k$
    (Bourgain, 1991), and for $n<(1+\sqrt2)^{k-1}+k$ (Oberlin, 2010), who also proved
    $\dim_H E\ge n-(n-k)/(1+\sqrt2)^k$.
  </p>
  <p>
    This is a machine-checked proof that every $(n,k)$-Besicovitch set satisfies
    $\dim_H E\ge n-(n-k)/p_c^k$, and that measurable ones have positive volume whenever
    $n<p_c^{k-1}+k$. Here $p_c\approx 2.4812$ is the root in $(2,3)$ of $p^3-2p^2-2p+2$,
    which exceeds $1+\sqrt2\approx 2.4142$.
  </p>
  <p>
    <span class="badge">registered</span>
    <a href="https://palomar-registry.org/entry?id=PALOMAR-2026-09-19-000001&amp;version=1" target="_blank" rel="noopener noreferrer">Palomar PALOMAR-2026-09-19-000001</a>
  </p>
</div>

<div class="entry">
  <h3 class="entry-title">
    <a href="https://github.com/CoolRmal/BerryEsseen" target="_blank" rel="noopener noreferrer">BerryEsseen</a>
  </h3>
  <p class="entry-meta">Lean 4 + Mathlib</p>
  <p>
    Let $X_1,X_2,\dots$ be i.i.d. with mean $0$, variance $1$ and $\beta=\mathbb{E}|X_1|^3<\infty$,
    and let $F_n$ be the distribution function of $(X_1+\dots+X_n)/\sqrt n$. The universal
    Berry&ndash;Esseen constant $C$ is the least constant with
    $\sup_x|F_n(x)-\Phi(x)|\le C\beta/\sqrt n$ for every such law and every $n$.
  </p>
  <p>
    Esseen showed $C\ge(\sqrt{10}+3)/(6\sqrt{2\pi})=0.4097\ldots$ (1956), and Zolotarev
    conjectured that this is sharp. Upper bounds have come down from $0.82$ (Zolotarev, 1967)
    through $0.7056$ (Shevtsova, 2006) to $0.4690$ (Shevtsova, 2013), the best published bound.
  </p>
  <p>
    This repository proves $0.4\le C\le 0.423$ in Lean, with the help of <code>native_decide</code>.
  </p>
</div>

Everything else is on
<a href="https://github.com/CoolRmal" target="_blank" rel="noopener noreferrer">GitHub</a>.
