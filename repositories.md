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
    <a href="/2026/09/02/A-Machine-Checked-Bound-of-0.6934-for-Besicovitch's-1_2-Problem.html">The proof can be found over here</a>.
  </p>
  <p>
    <span class="badge">registered</span>
    <a href="https://palomar-registry.org/entry?id=PALOMAR-2026-09-02-000011&amp;version=1" target="_blank" rel="noopener noreferrer">Palomar PALOMAR-2026-09-02-000011</a>
  </p>
</div>

Everything else is on
<a href="https://github.com/CoolRmal" target="_blank" rel="noopener noreferrer">GitHub</a>.
