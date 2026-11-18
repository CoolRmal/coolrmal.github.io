---
layout: post
title: "Monotonicity of PDEs Part 1: Serrin’s overdetermined problems on epigraphs"
description: "A quotient trick and a single high-power cutoff show that solutions of Serrin's overdetermined problem in any C^1 epigraph are monotone, which gives half-space rigidity up to dimension eight."
permalink: /2026/11/16/Monotonicity-of-PDEs-Part-1-Serrin-on-Epigraphs.html
---

Let $$\Omega\subset\mathbb R^n$$ be a domain with outer unit normal $$\nu$$, let $$f$$ be a $$C^1$$ function, and let $$\kappa>0$$. **Serrin's overdetermined problem** asks for a function $$u$$ with

$$
\begin{cases}
-\Delta u=f(u),\quad u>0 & \text{in }\Omega,\\
u=0,\quad \partial_\nu u=-\kappa & \text{on }\partial\Omega.
\end{cases}
\qquad\text{(S)}
$$

[Serrin](https://doi.org/10.1007/BF00250468) proved in 1971 the following surprising result: if $$\Omega$$ is a bounded domain whose boundary is of class $C^2$ and (S) has a solution, then $$\Omega$$ is a ball and $$u$$ is radial.

It is thus natural to ask what happens when $\Omega$ is unbounded. From now on, let us assume that $$\Omega$$ is the **epigraph** of a function $$g:\mathbb R^{n-1}\to\mathbb R$$,

$$
\Omega=\{(x',x_n):\ x_n>g(x')\}.
$$

In this case, the conjecture is that $\Omega$ is a half-space if (S) has a solution. Here is some partial progress on this problem from the literature.

- [Ros, Ruiz and Sicbaldi](https://doi.org/10.1002/cpa.21696) proved that a planar $C^{1,\alpha}$ domain with connected, unbounded boundary carrying a bounded solution of (S) is a half-plane.
- In dimension three, [Farina and Valdinoci](https://doi.org/10.1007/s00205-009-0227-8) proved it when $g$ is both $C^3$ and uniformly Lipschitz, assuming also that $u$ is bounded.
- For $$n\le8$$, [Wang and Wei](https://doi.org/10.1080/03605302.2019.1611846) proved that the answer is yes for $g \in C^1$ and Allen–Cahn-type reactions such as $$u-u^p$$, provided $$u$$ is monotone in the vertical direction, that is, $$\partial_nu>0$$ in $$\Omega$$.
- [Beuvin and Farina](https://doi.org/10.1007/s00208-026-03531-4) proved that for $$n\ge9$$, if $$g\in C^1$$ is bounded on one side by a linear function, that is, $$g(x')\ge-C(1+\lvert x'\rvert)$$ for all $$x'$$ or $$g(x')\le C(1+\lvert x'\rvert)$$ for all $$x'$$, for some $$C>0$$, and $u$ is monotone in the vertical direction, then $\Omega$ is a half-space.
- On the other hand, the conjecture fails in general for $$n\ge9$$: [del Pino, Pacard and Wei](https://doi.org/10.1215/00127094-3146710) constructed, for every $$n\ge9$$ and reactions such as $$u-u^3$$ and $$u-u^2$$, a smooth epigraph that is not a half-space on which (S) has a bounded solution.

A natural question is whether we can remove the assumption on monotonicity. Monotonicity of positive solutions in epigraphs goes back to [Berestycki, Caffarelli and Nirenberg](https://doi.org/10.1002/%28SICI%291097-0312%28199711%2950%3A11%3C1089%3A%3AAID-CPA2%3E3.0.CO%3B2-6), for globally Lipschitz graphs. Recent works relax the Lipschitz condition: [Beuvin, Farina and Sciunzi](https://doi.org/10.1016/j.matpur.2026.103868) treat uniformly continuous graphs that are bounded from below, and [Berestycki and Graham](https://doi.org/10.1007/s00205-026-02168-6) treat asymptotically uniformly Lipschitz graphs. [Beuvin and Farina](https://doi.org/10.1007/s00208-026-03531-4) list, as an open research direction, the search for conditions on $$g$$ weaker than global Lipschitz continuity that guarantee monotonicity. The theorem below answers this question when $$f(s)/s$$ is nonincreasing and $$g$$ is simply assumed to be $C^1$.

<div class="article-theorem" markdown="1">

**Theorem 1 (automatic monotonicity).** Let $$n\ge2$$, $$g\in C^1(\mathbb R^{n-1})$$, and let $$\Omega$$ be the epigraph of $$g$$. Let $$f$$ be locally Lipschitz on $$(0,\infty)$$ and such that $s\mapsto f(s)/s$ is nonincreasing on $(0,\infty)$. Let $$u\in C^2(\Omega)\cap C^1(\overline\Omega)$$ solve (S), and assume that the square mass of $$u$$ grows subexponentially:

$$
\liminf_{R\to\infty}\frac1R\log\left(1+\int_{\Omega\cap B_R}u^2\,dx\right)=0 .
\qquad\text{(G)}
$$

Then $$\partial_nu>0$$ in $$\Omega$$.

</div>

Combined with the theorem of Beuvin and Farina, Theorem 1 gives rigidity without any monotonicity assumption.

<div class="article-theorem" markdown="1">

**Corollary 2 (rigidity).** Let $$g\in C^1(\mathbb R^{n-1})$$, and let $$u$$ be a solution of (S) in the epigraph of $$g$$ with $$f(u)=u-u^p$$ for some $p>1$. Assume that either $$2\le n\le8$$, or $$n\ge9$$ and $$g$$ is bounded on one side by a linear function in the sense above. Then $$g$$ is affine and $$u$$ is one-dimensional.

</div>

*Proof.* Condition (G) holds since, for this class of reactions, [Beuvin and Farina](https://doi.org/10.1007/s00208-026-03531-4) (Corollary 5.4) showed that every positive solution is automatically bounded. $$\square$$

## Two principles

This post is part of a series of blog posts concerned with the automatic monotonicity of PDEs, and two principles used in the proof of Theorem 1 will be used again in later posts. Therefore, we summarize them here before we prove Theorem 1.

1. Let $\tau:= \partial_n(\log u)=\partial_nu/u$. We measure the failure of monotonicity by $z:=\tau^- = \max(-\tau,0)$. The problem of proving $\partial_nu\ge0$ is then turned into the equivalent problem of proving $$z\equiv 0$$.
2. We'll prove an estimate for a high moment of $$z$$ on the ball $$B_R$$ whose right-hand side involves a factor of $1/R$. The growth condition (G) enters to make sure the right-hand side decays fast enough so that we can conclude $z\equiv 0$ locally.

## Proof of Theorem 1

**Step 1: the equation for $\tau$.** Differentiating $$-\Delta u=f(u)$$ in $$x_n$$ gives $$-\Delta\partial_nu=f'(u)\,\partial_nu$$ in the sense of distributions. Set $h(s):=f(s)-sf'(s)$. Since $$u^2\nabla\tau=u\nabla\partial_nu-\partial_nu\,\nabla u$$,

$$
\begin{aligned}
\operatorname{div}(u^2\nabla\tau)
&=u\,\Delta\partial_nu-\partial_nu\,\Delta u\\
&=-u\,f'(u)\,\partial_nu+\partial_nu\,f(u)\\
&=u\,h(u)\,\tau .
\end{aligned}
$$

So $$\tau$$ solves the linear equation $$-\operatorname{div}(u^2\nabla\tau)+u\,h(u)\,\tau=0$$.

**Step 2: the inequality for $z$.** The negative part of a solution of such an equation is a subsolution in the weak sense:

$$
-\operatorname{div}(u^2\nabla z)+u\,h(u)\,z\le0.
\qquad\text{(1)}
$$

To see this, let $$\Phi_\varepsilon(s)=\frac12\bigl(\sqrt{s^2+\varepsilon^2}-s\bigr)$$, a smooth approximation of $$s^-$$, which satisfies $$0\le\Phi_\varepsilon(s)-s\Phi_\varepsilon'(s)\le\varepsilon/2$$. Using this estimate, the equation for $\tau$, and the positivity of both $$u\,h(u)$$ (the nonnegativity of $h$ follows from the monotonicity of $$f(s)/s$$) and $\Phi_\varepsilon''$ (as $\Phi_\varepsilon$ is convex), we compute

$$
\begin{align*}
-\operatorname{div}\bigl(u^2\nabla\Phi_\varepsilon(\tau)\bigr)+u\,h(u)\,\Phi_\varepsilon(\tau)
&=-\operatorname{div}\bigl(\Phi_\varepsilon'(\tau)\,u^2\nabla\tau\bigr)+u\,h(u)\,\Phi_\varepsilon(\tau)\\
&=-\Phi_\varepsilon'(\tau)\operatorname{div}(u^2\nabla\tau)-\Phi_\varepsilon''(\tau)\,u^2|\nabla\tau|^2+u\,h(u)\,\Phi_\varepsilon(\tau)\\
&=u\,h(u)\bigl[\Phi_\varepsilon(\tau)-\tau\Phi_\varepsilon'(\tau)\bigr]-u^2\,\Phi_\varepsilon''(\tau)\,|\nabla\tau|^2\\
&\le uh(u)\frac{\varepsilon}2.
\end{align*}
$$

Letting $$\varepsilon\to0$$ gives (1).

**Step 3: a Caccioppoli inequality.** Fix $$q\ge2$$ and a nonnegative Lipschitz function $$\eta$$ with compact support. We want to test (1) with $$z^{q-1}\eta^2$$. In order to integrate by parts without taking care of boundary terms, we first show that $$z$$ vanishes near $$\partial\Omega$$. On $$\partial\Omega$$ we have $$u=0$$, so $$\nabla u$$ is normal to the boundary, and the Neumann condition gives $$\nabla u=-\kappa\nu$$. The outer normal of an epigraph points downward,

$$
\nu=\frac{(\nabla g,-1)}{\sqrt{1+|\nabla g|^2}}.$$

Hence,

$$
\partial_nu=\frac{\kappa}{\sqrt{1+|\nabla g|^2}}>0\quad\text{on }\partial\Omega .
$$

Since $$\nabla u$$ is continuous up to the boundary, for every compact set $$K\subset\mathbb R^n$$ there is a neighborhood of the compact set $$\partial\Omega\cap K$$ on which $$\partial_nu>0$$. Then $$z$$ vanishes near $$\partial\Omega\cap K$$. Consequently, $$z^{q-1}\eta^2$$ is supported in a compact subset of the open set $$\Omega$$, so they produce no boundary terms.

Now test (1) with $$z^{q-1}\eta^2$$. Since

$$
\nabla\bigl(z^{q-1}\eta^2\bigr)=(q-1)\,z^{q-2}\eta^2\,\nabla z+2\,z^{q-1}\eta\,\nabla\eta,
$$

we obtain

$$
(q-1)\int u^2z^{q-2}|\nabla z|^2\eta^2+2\int u^2z^{q-1}\eta\,\nabla z\cdot\nabla\eta+\int u\,h(u)\,z^q\eta^2\le0 .
$$

Multiplying by $$q/2$$, this bounds the cross term:

$$
q\int u^2z^{q-1}\eta\,\nabla z\cdot\nabla\eta
\le-\frac{q(q-1)}2\int u^2z^{q-2}|\nabla z|^2\eta^2-\frac q2\int u\,h(u)\,z^q\eta^2 .
$$

On the other hand, since $$\nabla(z^{q/2}\eta)=\frac q2\,z^{q/2-1}\eta\,\nabla z+z^{q/2}\nabla\eta$$, expanding the square gives

$$
\begin{aligned}
\int u^2\bigl|\nabla(z^{q/2}\eta)\bigr|^2
&=\frac{q^2}4\int u^2z^{q-2}|\nabla z|^2\eta^2+q\int u^2z^{q-1}\eta\,\nabla z\cdot\nabla\eta+\int u^2z^q|\nabla\eta|^2 .
\end{aligned}
$$

Substituting the bound for the cross term and using $$\frac{q^2}4-\frac{q(q-1)}2=-\frac{q(q-2)}4$$, we get

$$
\int u^2\bigl|\nabla(z^{q/2}\eta)\bigr|^2+\frac{q(q-2)}4\int u^2z^{q-2}|\nabla z|^2\eta^2+\frac q2\int u\,h(u)\,z^q\eta^2
\le\int u^2z^q|\nabla\eta|^2 .
$$

Since $$q\ge2$$ and $$u\,h(u)\geq0$$, the second and third terms on the left are nonnegative, and we may drop them:

$$
\int u^2\bigl|\nabla(z^{q/2}\eta)\bigr|^2\le\int u^2z^q|\nabla\eta|^2 .
\qquad\text{(2)}
$$

**Step 4: one more power of $$z$$.** Where $$\tau<0$$ we have $$\partial_nu=-zu$$, so $$\partial_n(u^2)\,z^q=-2u^2z^{q+1}$$ everywhere. Integrating by parts in $$x_n$$ (no boundary terms, by Step 3),

$$
\begin{aligned}
\int u^2z^{q+1}\eta^2
&=-\frac12\int\partial_n(u^2)\,z^q\eta^2\\
&=\frac12\int u^2\,\partial_n\bigl(z^q\eta^2\bigr)\\
&=\int u^2\,\bigl(z^{q/2}\eta\bigr)\,\partial_n\bigl(z^{q/2}\eta\bigr).
\end{aligned}
$$

By the Cauchy–Schwarz inequality and (2),

$$
\int u^2z^{q+1}\eta^2
\le\left(\int u^2z^q\eta^2\right)^{1/2}\left(\int u^2z^q|\nabla\eta|^2\right)^{1/2}.
\qquad\text{(3)}
$$

**Step 5: the key estimate.** Let $$\chi_R$$ be a Lipschitz cutoff with $$0\le\chi_R\le1$$, $$\chi_R=1$$ on $$B_R$$, $$\chi_R=0$$ outside $$B_{2R}$$, and $$\lvert\nabla\chi_R\rvert\le1/R$$. Fix an integer $$m\ge3$$ and apply (3) with

$$
q=m-1,\qquad \eta=\chi_R^m,\qquad |\nabla\eta|\le\frac mR\,\chi_R^{m-1}.
$$

Using (3), $$\chi_R^{2m}\le\chi_R^{2m-2}$$, and Hölder's inequality with exponents $$\frac m{m-1}$$ and $$m$$ applied to the factorization

$$
u^2z^{m-1}\chi_R^{2m-2}=\bigl(u^2z^m\chi_R^{2m}\bigr)^{\frac{m-1}m}\bigl(u^2\mathbf 1_{B_{2R}}\bigr)^{\frac1m},
$$

we get

$$
\begin{aligned}
\int u^2z^m\chi_R^{2m}
&\le\left(\int u^2z^{m-1}\chi_R^{2m}\right)^{1/2}\left(\int u^2z^{m-1}\Bigl(\frac mR\Bigr)^2\chi_R^{2m-2}\right)^{1/2}\\
&\le\frac mR\int u^2z^{m-1}\chi_R^{2m-2}\\
&\le\frac mR\left(\int u^2z^m\chi_R^{2m}\right)^{\frac{m-1}m}\left(\int_{\Omega\cap B_{2R}}u^2\right)^{\frac1m}.
\end{aligned}
$$

The integral $$\int u^2z^m\chi_R^{2m}$$ is finite by Step 3; if it vanishes there is nothing to prove, and otherwise we divide by its power $$\frac{m-1}m$$. Writing

$$
V(r)=\int_{\Omega\cap B_r}u^2\,dx,
$$

we obtain

$$
\int_{\Omega\cap B_R}u^2z^m\,dx
\le\int u^2z^m\chi_R^{2m}
\le\left(\frac mR\right)^mV(2R).
\qquad\text{(4)}
$$

**Step 6: a strict decrease forces exponential growth.** Suppose that $$z(x_0)>0$$ for some $$x_0\in\Omega$$. By continuity there are a ball $$A\subset\Omega$$ and a number $$a>0$$ with $$z\geq a$$ on $$A$$; let $$\mu_A=\int_Au^2>0$$. For large $$R$$ we have $$A\subset B_R$$, and (4) gives

$$
\mu_A\,a^m\le\left(\frac mR\right)^mV(2R), $$

that is,

$$
V(2R)\geq\mu_A\left(\frac{aR}m\right)^m .
$$

Choose $$m=\lfloor aR/2\rfloor$$. Then $$V(2R)\geq\mu_A\,2^{\lfloor aR/2\rfloor},$$ and we can deduce that,

$$
\liminf_{R\to\infty}\frac1R\log\bigl(1+V(R)\bigr)\geq\frac{a\log2}4>0,
$$

which contradicts (G). Hence $$z\equiv0$$, that is, $$\partial_nu\geq0$$ in $$\Omega$$. (If $$u$$ grows at most polynomially, say $$u(x)\le C(1+\lvert x\rvert)^k$$, there is a simpler argument that avoids letting $$m$$ depend on $$R$$: then $$V(2R)\le C'R^{n+2k}$$ for $$R\ge1$$, and (4) with a fixed integer $$m>n+2k$$ gives $$\int_{\Omega\cap B_R}u^2z^m\le C''R^{n+2k-m}\to0$$ as $$R\to\infty$$.)

**Step 7: strict monotonicity.** The derivative $$\partial_nu\geq0$$ solves the linear equation $$-\Delta\partial_nu=f'(u)\,\partial_nu$$ with a locally bounded coefficient. By the strong maximum principle, either $$\partial_nu\equiv0$$ or $$\partial_nu>0$$ in the connected open set $$\Omega$$. The first alternative is ruled out by $$\partial_nu>0$$ on $$\partial\Omega$$ (Step 3). $$\square$$

## References

{: .article-references}
1. James Serrin, [*A symmetry problem in potential theory*](https://doi.org/10.1007/BF00250468), *Archive for Rational Mechanics and Analysis* **43** (1971), 304–318.
2. Henri Berestycki, Luis Caffarelli and Louis Nirenberg, [*Monotonicity for elliptic equations in unbounded Lipschitz domains*](https://doi.org/10.1002/%28SICI%291097-0312%28199711%2950%3A11%3C1089%3A%3AAID-CPA2%3E3.0.CO%3B2-6), *Communications on Pure and Applied Mathematics* **50** (1997), 1089–1111. The conjecture, the monotonicity theorem for Lipschitz epigraphs, and the first rigidity results for epigraphs.
3. Antonio Ros, David Ruiz and Pieralberto Sicbaldi, [*A rigidity result for overdetermined elliptic problems in the plane*](https://doi.org/10.1002/cpa.21696), *Communications on Pure and Applied Mathematics* **70** (2017), 1223–1252.
4. Alberto Farina and Enrico Valdinoci, [*Flattening results for elliptic PDEs in unbounded domains with applications to overdetermined problems*](https://doi.org/10.1007/s00205-009-0227-8), *Archive for Rational Mechanics and Analysis* **195** (2010), 1025–1058.
5. Kelei Wang and Juncheng Wei, [*On Serrin's overdetermined problem and a conjecture of Berestycki, Caffarelli and Nirenberg*](https://doi.org/10.1080/03605302.2019.1611846), *Communications in Partial Differential Equations* **44** (2019), 837–858. [arXiv:1502.04680](https://arxiv.org/abs/1502.04680)
6. Nicolas Beuvin and Alberto Farina, [*Serrin's overdetermined problems on epigraphs*](https://doi.org/10.1007/s00208-026-03531-4), *Mathematische Annalen* **396** (2026), article 28. [arXiv:2502.04812](https://arxiv.org/abs/2502.04812)
7. Nicolas Beuvin, Alberto Farina and Berardino Sciunzi, [*Monotonicity for solutions to semilinear problems in epigraphs*](https://doi.org/10.1016/j.matpur.2026.103868), *Journal de Mathématiques Pures et Appliquées* **210** (2026), 103868.
8. Henri Berestycki and Cole Graham, [*A stable-compact method for qualitative properties of semilinear elliptic equations*](https://doi.org/10.1007/s00205-026-02168-6), *Archive for Rational Mechanics and Analysis* **250** (2026), article 21.
9. Manuel del Pino, Frank Pacard and Juncheng Wei, [*Serrin's overdetermined problem and constant mean curvature surfaces*](https://doi.org/10.1215/00127094-3146710), *Duke Mathematical Journal* **164** (2015), 2643–2722. [arXiv:1310.4528](https://arxiv.org/abs/1310.4528)
