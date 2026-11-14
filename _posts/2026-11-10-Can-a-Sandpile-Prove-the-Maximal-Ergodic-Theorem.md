---
layout: post
title: "The Maximal Ergodic Theorem through Partial Balayage"
description: "A proof of the heat maximal ergodic inequality, followed by discrete partial balayage, monotone iteration, and the filling scheme."
permalink: /2026/11/10/Can-a-Sandpile-Prove-the-Maximal-Ergodic-Theorem.html
---

Let

$$
h_t(x)=\frac{1}{(4\pi t)^{d/2}}
\exp\!\left(-\frac{|x|^2}{4t}\right),
\qquad t>0,
$$

be the heat kernel on $$\mathbb R^d$$, and let $$K_t$$ be its time average,

$$
K_t(x)=\frac1t\int_0^t h_s(x)\,ds.
$$

We consider the corresponding maximal operator

$$
M_Kf(x)=\sup_{t>0}(K_t*|f|)(x).
$$

Recall the following maximal principle derived from partial balayage (proved in this article: [Two partial balayage principles for weak-type estimates, §3](https://coolrmal.github.io/articles/two-partial-balayage-principles/)):

<div class="article-theorem" markdown="1">

**Maximal principle.** Let $$\phi\in L^1(\mathbb R^d)$$ be nonnegative and even, and suppose $$\Delta \phi\geq0$$ in distributions on $$\mathbb R^d\setminus\{0\}$$.
For its dilates $$\phi_r(x)=r^{-d}\phi(x/r)$$, the associated maximal operator $$M_\phi f=\sup_{r>0}\phi_r*\lvert f\rvert$$ satisfies

$$
\lVert M_\phi\rVert_{1\rightarrow 1,\infty}\leq
\int_{\mathbb R^d}\phi(x)\,dx.
$$

</div>

In order to apply this principle to the maximal operator defined by the averaged heat kernel, we need to do three computations:

1. Scaling gives $$K_t(x)=t^{-d/2}K_1(x/\sqrt t)$$.
2. Since $$\partial_s h_s=\Delta h_s$$ and $$h_s\to\delta_0$$ as $$s\downarrow0$$,

    $$
    \begin{aligned}
    \Delta K_t &=\frac1t\int_0^t\Delta h_s\,ds=\frac1t\int_0^t\partial_s h_s\,ds=\frac{h_t-\delta_0}{t}.
    \end{aligned}
    $$

    In particular, for points away from the origin, we have $$\Delta K_t=\frac{h_t}t\geq0$$.
3. Tonelli's theorem gives

    $$
    \begin{aligned}
    \int_{\mathbb R^d}K_t(x)\,dx=\frac1t\int_0^t
    \left(\int_{\mathbb R^d}h_s(x)\,dx\right)ds=\frac1t\int_0^t1\,ds=1.
    \end{aligned}
    $$

    The maximal principle therefore gives $$\lVert M_K\rVert_{1\rightarrow 1,\infty} \le 1.$$

Historically, this inequality was obtained through the maximal ergodic theorem and the operator method developed by [Hopf](https://doi.org/10.1512/iumj.1954.3.53002) and [Dunford and Schwartz](https://doi.org/10.1512/iumj.1956.5.55003). Let me briefly explain that framework. A linear operator $$T:L^1(\mu)\to L^1(\mu)$$ on a $\sigma$-finite measure space $$(X,\mu)$$ is a **Dunford–Schwartz operator** (hereafter abbreviated as a DS operator) if it is a contraction on both $$L^1$$ and $$L^\infty$$, i.e.,

$$
\begin{aligned}
\|Tf\|_1&\leq\|f\|_1
&&\text{for }f\in L^1,\\
\|Tf\|_\infty&\leq\|f\|_\infty
&&\text{for }f\in L^1\cap L^\infty.
\end{aligned}
$$

It is **positive** if $$f\geq0$$ implies $$Tf\geq0$$. For every fixed $$t>0$$, convolution with either $$h_t$$ or $$K_t$$ is a positive DS operator: both kernels are nonnegative and have integral one. These operators arise naturally in ergodic theory. For example, composition with a measure-preserving transformation is a positive DS operator. The maximal inequality below controls errors uniformly over all averaging times; together with convergence on a dense class, it gives a route to almost-everywhere convergence of the averages.

<div class="article-theorem" markdown="1">

**Hopf–Dunford–Schwartz maximal inequality.** Let $$T$$ be a positive DS operator. Define its ergodic averages by

$$
A_nf=\frac1n\sum_{j=0}^{n-1}T^jf,
\qquad n\geq1,
$$

where $$T^0=I$$. Then, for every nonnegative $$f\in L^1(\mu)$$ and $$\lambda>0$$,

$$
\lambda\,\mu\left\{\sup_{n\geq1}A_nf>\lambda\right\}\leq\|f\|_1.
$$

</div>

By discrete approximation, this gives the continuous-time version that can be applied to the time average of the heat kernel.

<div class="article-theorem" markdown="1">

**Continuous-time maximal inequality.** If $$(P_t)_{t\geq0}$$ is a strongly continuous semigroup of positive DS operators on $$L^1(\mu)$$, then for every $$f\in L^1(\mu)$$ and $$\lambda>0$$,

$$
\lambda\,\mu\left\{
\sup_{t>0}\frac1t\int_0^tP_s|f|\,ds>\lambda
\right\}
\leq\|f\|_1.
$$

</div>

This classical approach using DS operators proceeds from discrete averages to continuous averages. At the beginning of this article, we also proved the maximal inequality for the time averages of the heat kernel by partial balayage, so it is natural to ask whether partial balayage can also prove the discrete maximal ergodic inequality. The answer is yes. The main tool is the following discrete version of the partial balayage decomposition.

<div class="article-theorem" markdown="1">

**Discrete partial balayage.** Let $$T$$ be a positive DS operator, $$f\in L^1(\mu)$$ with $$f\geq0$$, and $$\lambda>0$$. Fix $$0<\theta<1$$. There exist $$u,\sigma\in L^1(\mu)$$ with $$u\geq0$$ such that, with $$D=\{u>0\}$$,

$$
\begin{aligned}
f&=\sigma-(\theta T-I)u,\\
0&\leq\sigma\leq\lambda,\\
\sigma&=\lambda\quad\text{a.e. on }D,\\
\lambda\mu(D)&\leq\|f\|_1.
\end{aligned}
$$

Moreover, the function $$u$$ satisfies the following fixed-point equation:

$$
u=(\theta T u+f-\lambda)_+.
$$

</div>

Here $$\theta T-I$$ takes the role of the Laplacian $$\Delta$$. Let's first suppose we have a function $$u$$ that satisfies the fixed-point equation. Define $$\sigma = f + (\theta T-I)u$$. On $$D$$, the fixed-point equation gives $$u=\theta T u+f-\lambda$$, hence $$\sigma=\lambda.$$ Outside $$D$$, $$u=0$$ and thus the fixed-point equation gives $$\theta T u+f\leq\lambda$$, so $$0\leq\sigma=f+\theta T u\leq\lambda.$$ The decomposition identity and the bounds on $$\sigma$$ therefore follow once we show the existence of a fixed point.

Why consider this fixed point in the first place? Let's imagine there's a sandpile whose mass density is represented by $$f$$ and we are trying to redistribute the mass so that the density after the redistribution is capped above by $$\lambda$$. The total amount of mass available at a point is its original mass $$f$$ plus arrivals $$\theta T u$$. If that amount exceeds the capacity $$\lambda$$, the excess must be sent out. If it does not exceed the capacity, nothing is sent. Thus the total emission must be
$$u=(f+\theta T u-\lambda)_+.$$

This suggests that we should obtain the final density $$\sigma$$ through **monotone iteration**. Start with no mass sent and repeatedly apply the same rule,

$$
u_0=0,\qquad
u_{k+1}=(f+\theta T u_k-\lambda)_+.
$$

Think of $$u_k(x)$$ as the total mass that has left $$x$$ after $$k$$ rounds. Then $$\theta T u_k$$ records cumulative arrivals and $$f$$ is the original deposit, counted once. Each point keeps up to $$\lambda$$ units and sends on the excess. The factor $$\theta$$ means that at least a fraction $$1-\theta$$ of the emitted mass disappears in transit. The mass bound $$\lambda\mu(D)\leq\|f\|_1$$ is therefore also expected, as we are redistributing mass without creating any.

The animation below illustrates this iteration on $$\mathbb{Z}$$ for the operator

$$
Tg(j)=\frac{g(j-1)+g(j+1)}2.
$$

Thus $$T-I$$ is half the usual discrete Laplacian. We put seven units at the origin, set $$\lambda=1$$, and take $$\theta=4/5$$.

{% include hds-sandpile.html %}


This idea has a long history in ergodic theory under the name **filling scheme**. It was used by [Chacon and Ornstein](https://doi.org/10.1215/ijm/1255455860) in their ratio ergodic theorem and developed further by Neveu. The construction here uses that scheme with a capacity and killing. On a lattice it is also a dissipative version of the divisible sandpile, whose connection to partial balayage is developed by [Roos](https://arxiv.org/abs/1605.03095).

We now prove the discrete partial balayage lemma rigorously.

**Proof of discrete partial balayage. Step 1: monotone iteration.** Define $$u_0=0$$ and $$u_{k+1}=(\theta Tu_k+f-\lambda)_+.$$ We show that this sequence is increasing and bounded.

- *Monotonicity.* We have $$u_1=(f-\lambda)_+\geq0=u_0$$. If $$u_k\geq u_{k-1}$$, then $$Tu_k\geq Tu_{k-1}$$ as positive operators preserve inequalities. We can then deduce that
$$\theta Tu_k +f-\lambda\geq\theta Tu_{k-1}+f-\lambda$$, and as the positive-part map is nondecreasing, $$u_{k+1}\geq u_k$$.

- *Boundedness in* $$L^1$$. Since $$\theta Tu_k+f\geq0$$, we get $$u_{k+1}\leq(\theta Tu_k+f)_+=\theta Tu_k+f$$. By induction,

$$
u_k\leq\sum_{j=0}^{k-1}\theta^jT^jf,
\qquad
\|u_k\|_1\leq\sum_{j=0}^{\infty}\theta^j\|f\|_1
=\frac{\|f\|_1}{1-\theta}.
$$

**Step 2: passage to the limit.** By monotone convergence, $$u_k\uparrow u\in L^1$$ with $$\lVert u\rVert_1\leq\lVert f\rVert_1/(1-\theta)$$, and $$u_k\to u$$ in $$L^1$$. Since $$T$$ is $$L^1$$-continuous, $$\theta Tu_k\to\theta Tu$$ in $$L^1$$. The sequence $$\theta Tu_k$$ is also increasing, so it converges almost everywhere to $$\theta Tu$$. Letting $$k\to\infty$$ in the recursion gives

$$
u=(\theta Tu+f-\lambda)_+.
$$

In other words, $$u$$ satisfies the fixed-point equation, so by the discussion above, we know that $$u$$ and $$\sigma$$ give the decomposition identity and the stated bounds on $$\sigma$$.

**Step 3: mass comparison.** We compute

$$
\begin{aligned}
\lambda\mu(D)
&=\int_D\sigma\,d\mu\\
&=\int_Df\,d\mu+\int_D\theta Tu\,d\mu-\int_Du\,d\mu\\
&=\int_Df\,d\mu+\int_D\theta Tu\,d\mu-\int_Xu\,d\mu\\
&\leq\int_Df\,d\mu+\theta\|u\|_1-\|u\|_1\\
&=\int_Df\,d\mu-(1-\theta)\|u\|_1\\
&\leq\|f\|_1,
\end{aligned}
$$

where the first line follows from $$\sigma=\lambda$$ on $$D$$, the third uses $$u=0$$ on $$D^c$$, and the fourth uses positivity and the $$L^1$$ contraction property of $$T$$. $$\square$$

We finish by using the decomposition to prove the maximal ergodic inequality.

**Proof of the maximal inequality by partial balayage.** Let $$T$$ be a positive DS operator, $$f\geq0$$ in $$L^1$$, and $$\lambda>0$$.

**Step 1: fixed** $$0<\theta<1$$. Take $$u,\sigma,D$$ from the discrete partial balayage lemma. Applying $$\sum_{j=0}^{n-1}\theta^jT^j$$ to $$f=\sigma-(\theta T-I)u$$ and telescoping gives the $$L^1$$ identity

$$
\sum_{j=0}^{n-1}\theta^jT^jf
=\sum_{j=0}^{n-1}\theta^jT^j\sigma
-\bigl(\theta^nT^nu-u\bigr).
$$

Since $$0\leq\sigma\leq\lambda$$ and $$T$$ is a positive $$L^\infty$$ contraction,

$$
0\leq\theta^jT^j\sigma\leq\theta^j\lambda\leq\lambda,
\qquad
\sum_{j=0}^{n-1}\theta^jT^j\sigma\leq n\lambda.
$$

Almost everywhere outside $$D$$, positivity gives

$$
\begin{aligned}
\sum_{j=0}^{n-1}\theta^jT^jf&=\sum_{j=0}^{n-1}\theta^jT^j\sigma-\theta^nT^nu\leq n\lambda \qquad\text{for all }n\geq1.
\end{aligned}
$$

Hence, up to a null set,

$$
\left\{\sup_{n\geq1}\frac1n\sum_{j=0}^{n-1}\theta^jT^jf>\lambda\right\}
\subseteq D.
$$

By the mass estimate proved above,

$$
\begin{aligned}
\lambda\,\mu\left\{\sup_{n\geq1}\frac1n\sum_{j=0}^{n-1}\theta^jT^jf>\lambda\right\}
&\leq\lambda\mu(D)\leq\int_Df\,d\mu\leq\|f\|_1.
\end{aligned}
$$

**Step 2:** $$\theta\uparrow1$$. Since $$f\geq0$$, we have $$T^jf\geq0$$, so for each $$n$$, 

$$
\frac1n\sum_{j=0}^{n-1}\theta^jT^jf\uparrow A_nf
\qquad\text{as }\theta\uparrow1.
$$

Let $$\theta$$ increase to $$1$$ along a sequence. The sets

$$
\left\{\sup_{n\geq1}\frac1n\sum_{j=0}^{n-1}\theta^jT^jf>\lambda\right\}
$$

then increase to $$\{\sup_{n\geq1}A_nf>\lambda\}$$, each with measure at most $$\lVert f\rVert_1/\lambda$$. Continuity of measure from below gives the desired conclusion. $$\square$$


## References

{: .article-references}
1. Yongxi Lin, [*Two partial balayage principles for weak-type estimates*](https://coolrmal.github.io/articles/two-partial-balayage-principles/), especially §3, the maximal principle used above.
2. Eberhard Hopf, [*The General Temporally Discrete Markoff Process*](https://doi.org/10.1512/iumj.1954.3.53002), 1954.
3. Nelson Dunford and Jacob T. Schwartz, [*Convergence Almost Everywhere of Operator Averages*](https://doi.org/10.1512/iumj.1956.5.55003), 1956.
4. Terence Tao, [*254A, Lecture 9: Ergodicity*](https://terrytao.wordpress.com/2008/02/04/254a-lecture-9-ergodicity/), 2008. An exposition of the maximal inequality and its connection to pointwise convergence.
5. R. V. Chacon and D. S. Ornstein, [*A general ergodic theorem*](https://doi.org/10.1215/ijm/1255455860), *Illinois Journal of Mathematics* **4** (1960), 153–160.
6. Jacques Neveu, [*The filling scheme and the Chacon–Ornstein theorem*](https://doi.org/10.1007/BF02762170), *Israel Journal of Mathematics* **33** (1979), 368–377.
7. Joakim Roos, [*Partial Balayage and a Generalization of the Divisible Sandpile Model*](https://arxiv.org/abs/1605.03095), 2016.
