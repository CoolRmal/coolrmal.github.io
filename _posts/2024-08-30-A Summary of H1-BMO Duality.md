## A Summary of $H_1$-BMO Duality

This article aims to provide an intuition for why BMO is the dual of $H^1$. I will also outline the proof of this duality. We begin by presenting several definitions.

<strong>Definition 1: </strong>Let $f:\mathbb{R}^n\rightarrow \mathbb{C}$ be a locally integrable function. The mean $f_K$ over a measurable subset $K$ of $\mathbb{R}^n$ is defined as

$$\frac{1}{|K|}\int_Kf(x)dx$$

The oscillation is defined as $\lvert f-f_K\rvert$, and the mean oscillation is

$$|f-f_K|_K=\frac{1}{|K|}\int_K|f(x)-f_K|dx$$

$f$ belongs to the space of bounded mean oscillation BMO($\mathbb{R}^n$) if

$$\|f\|\_{\text{BMO}}:=\sup_{Q}|f-f_Q|_Q<\infty$$

where $Q$ is an arbitrary cube with sides parallel to the axis.

<strong>What is the motivation to consider the space BMO?</strong> Well, $L^\infty\subset \text{BMO}$ because for any $f\in L^\infty$,

$$
\begin{align*}
    |f-f_Q|\_Q&=\frac{1}{|Q|}\int_Q|f(x)-f_Q|dx\\
    &\leq \frac{1}{|Q|}(\int_Q|f(x)|dx+\int_Q|f_Q|dx)\\
    &\leq \|f\|\_{L^\infty}+|f_Q|\\
    &=\|f\|\_{L^\infty}+\frac{1}{|Q|}\int_Q|f(x)|dx\\
    &\leq 2\|f\|_{L^\infty}
\end{align*}
$$

BMO then can be considered as a substitude of $L^\infty$.

<strong>BMO is actually a quotient space. </strong>It is easy to see that for any constant $c\in \mathbb{C}$, $f$ and $f+c$ have the same BMO norm.  We thus identity $f$ with $f+c$, and when we say BMO, what we really mean is BMO mod out the constant functions. This also justifies the use of the term BMO norm (otherwise a function with zero BMO norm may not be the zero function).

</strong>What are the possible function spaces whose duals are isomorphic to BMO? </strong>We know from $L^p$ theory that $L^\infty=(L^1)^\*$ (at least this is true for $\mathbb{R}^n$ with Lebesgue measure) and the isomorphism is given by the following formula:

$$f\in L^\infty\mapsto (g\in L^1\mapsto \int_{\mathbb{R}^n}g(x)f(x)dx)$$

Heuristically, this suggests that whenever we consider a function space as some dual space, we can identify a function $f$ with the integral operator related to the measure $f(x)dx$ (this is also the essence of the Riesz representation theorem for linear functionals defined on the space of continuous functions). Therefore, we should expect something similar for BMO.

Now from the remark above, we should also expect that if $f\in$ BMO, then for any constant $c$, $f$ and $f+c$ should give rise to the same functional. That is, if $F$ is a function space such that $F^*\cong$ BMO, then for any $g\in F$ and $f\in$ BMO, we have

$$\int_{\mathbb{R}^n}g(x)f(x)dx=\int_{\mathbb{R}^n}g(x)(f(x)+c)dx$$

In particular, we can take $c=1$ to conclude that

$$\int_{\mathbb{R}^n}g(x)dx=0$$

Clearly, we also want the integral of $g$ to be well-defined. Hence, we should expect that

$$F\subset \{g\in L^1(\mathbb{R}^n):\int_{\mathbb{R}^n}g(x)dx=0\}$$

<strong>$H^1$ indeed satisfies this property!</strong>

<strong>Why the space of integrable functions with mean 0 does not work? </strong>It is a closed subspace of $L^1$, so its dual space is some quotient of $L^\infty$. However, BMO contains some unbounded functions. This argument also suggests $F$ is not closed in $L^1$ (and thus $H^1$ is not closed in $L^1$).

Now we get into some details of the proof.

<strong>Step 1: </strong>We first start with a function $b\in L^\infty$. There is a corresponding linear functional defined on $H^1$:

$$L_b(g)=\int_{\mathbb{R}^n}g(x)b(x)dx$$

This is well-defined for any $g\in H^1$ because $H^1\subset L^1$. We have the following estimate:

$$\lVert L_b\rVert_{(H^1)^*}\leq C_n\lVert b \rVert_{\text{BMO}}$$

which is obtained by using the atomic decomposition of $H^1$. We denote the space of finite linear combinations of $H^1$ atoms by $H^1_0$.

<strong>Step 2: </strong>We want to extend the estimates above a to function $b\in \text{BMO}$. The idea is to use a sequence of functions $\\{b\chi_{\lvert b\rvert\leq n}\\}\_{n\in \mathbb{N}}$ in $L^\infty$ to approximate $b$. Indeed this sequence converges a.e. to $b$ and has a bounded BMO norm. The corresponding sequence of linear functionals $L_{b_n}$ is thus contained in a bounded region of $(H^1)^\*$ by what is proved above, which allows us to use the Banach-Alaoglu theorem to obtain a weak* cluster point $\tilde{L}\_b$. As a consequence of the Banach-Alaoglu theorem, we have

$$\lVert \tilde{L}\_b \rVert_{(H^1)^*}\leq C_n\lVert b\rVert_{\text{BMO}}$$

Notice that $L_b$ is only well-defined on $H^1_0$, and $\tilde{L}_b$ is the unique extension of $L_b$. Thus, the linear functional $\tilde{L}_b$ will continue to be denoted by $L_b$. 

<strong>Step 3: </strong>We now want to show that

$$b\rightarrow L_b$$

is an injective function from BMO to $(H^1)^\*$. It suffices to show that if $L_b$ is the zero functional, then $b$ is a constant. Indeed, we only need to show that $b$ is constant on every cube. We need the following Exercise from Grafakos's book *Fundamentals of Fourier Analysis*:

<strong>Exercise 7.8.5:</strong> Suppose that $u\in L^1_{\text{loc}}(\mathbb{R}^n)$ is supported in a cube $Q$ and has the property

$$\int_Qu(x)g(x)dx=0$$

for all bounded functions $g$ on $Q$ with mean value zero (which is a subset of $H^1_0$). Show that $u$ is a.e. equal to a constant on $Q$.

*Proof.* WLOG we can assume that $u$ is real-valued. Suppose $u$ were not a.e. constant on $Q$. Define a distribution function $f$:

$$F(s):=m(\{x\in Q:u(x)\leq s\})$$

where $m$ is the Lebesgue measure. Notice that $F$ has the following properties:

1. $0\leq F\leq m(Q)$.
2. $F$ is right continuous.
3. $\underset{s\rightarrow\infty}{\lim}F(s)=m(Q)$.
4. $\underset{s\rightarrow-\infty}{\lim}F(s)=0$.

If $F$ only takes values $0$ and $m(Q)$, then there would exist some real number $c$ such that $\forall s\geq c$, $F(s)=m(Q)$ and $\forall s<c$, $F(s)=0$. In this case, $u=c$ a.e. in $Q$, which is a contradiction. Hence, there exists a real number $c$ such that $0<F(c)<m(Q)$. Since $F$ is right continuous, there exists some real number $d>c$ such that $F(c)\leq F(d)<m(Q)$ for some small enough $\varepsilon$. The following two sets

$$E = \{u\leq c\}\cap Q, F = \{u \geq d\}\cap Q$$

then have positive measure. Consider the bounded function defined by:

$$
\begin{align*}
            g(x)&=\begin{cases}
                -|F|, & x\in E\\
                |E|, & x\in F\\
                0, & \text{otherwise}
            \end{cases}
        \end{align*}
$$

$g$ clearly has mean value zero. By the assumption,

$$
\begin{align*}
            \int_Qu(x)g(x)dx&=0\\
            \int_E(-|F|)u(x)dx+\int_F|E|u(x)dx&=0\\
            -c|F||E|+d|E||F|&\leq 0\\
            (d-c)|E||F|&\leq 0
\end{align*}
$$

which is a contradiction. $\square$

<strong>Step 4: </strong>Lastly, we need show that the function $b\rightarrow L_b$ is surjective. That is, given $L\in (H^1)^*$, we want to show that the restriction of $L$ on $H^1_0$ is equal to $L_b$ for some $b\in$ BMO. The idea is that we consider the restriction of $L$ onto $L^2_0(Q)$ (which is the set of square integrable functions supported in a cube $Q$ with mean value 0), which allows us to represents $L$ locally by a function $b_Q\in L^2(Q)$. We then can piece these $b_Q$'s together to get a representative of $L$ over the entire Euclidean space.
