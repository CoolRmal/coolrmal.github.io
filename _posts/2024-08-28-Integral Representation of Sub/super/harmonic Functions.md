## Integral Representation of Sub/super/harmonic Functions

I want to share a theorem about sub/superharmonic function that I found pretty amazing and give an outline for its proof. Let first give some definitions. If $u:\Omega\rightarrow [-\infty,\infty]$ is subharmonic, then we can define the following linear functional on $C_0^\infty(\Omega)$:

$$L_u:\Psi\in C_0^\infty(\omega)\rightarrow \int_\Omega u\Delta \psi d\lambda$$

By using an approximation argument, one can obtain a positive linear functional on $C_0(\Omega)$, which can be represented as an integral with respected to some Radon measure $\mu_u$. We call $\mu_u$ the Riesz measure associated with $u$, and view it as the distribution laplacian of $u$. If $u$ is superharmonic, then $\mu_u$ is the Riesz measure associated with $-u$. By Weyl's lemma, if two subharmonic function $u_1,u_2$ have the same distribution laplacian, then their difference is a harmonic function.

Let $U_y(x)$ be the fundamental solution of laplacian:

$$
\begin{align*}
    U_y(x)&=\begin{cases}
        -\ln|x-y|, & N=2\\
        |x-y|^{2-N}, & N\geq 3
    \end{cases}
\end{align*}
$$

Let $\Omega$ be a connected open subset of $\mathbb{R}^N$, where $N\geq 2$. We say that $\Omega$ is Greenian if for each $y$ in $\Omega$, the function $U_y$ has a subharmonic minorant $h_y$ on $\Omega$. From now on, we always assume that $\Omega$ is Greenian. Define

$$G_\Omega(x,y)=U_y(x)-h_y(x)$$

Then the Riesz Decomposition Theorem tells us the integral representation of a superharmonic function defined on $\Omega$. For an arbitrary measure $\mu$, we can define 

$$G_\Omega\mu(x):=\int_\Omega G_\Omega(x,y)d\mu(y)$$

This function takes values in $[0,\infty]$, and we call it a potential associated with $\mu$ if $G_\Omega\mu$ is finite at some point. If you are willing to accept that the integral of a superharmonic function is superharmonic, then you can see that $G_\Omega\mu$ is actually superharmonic if it is a potential. 

Riesz Decomposition Theorem: Let $u$ be a superharmonic function defined on $\Omega$. Then $G_\Omega\mu_u$ is a potential and $u$ has the following representation:

$$u(x)=G_\Omega\mu_u(x)+h(x)$$

where $h$ is the greatest harmonic minorant of $u$.

If you already know that $G_\Omega\mu_u$ is a potential, then this theorem is easy to prove because you can first apply Fubini's theorem to show that the Riesz measure associated with $G_\Omega\mu_u$  is $\mu_u$ and then use Weyl's lemma to know that $u-G_\Omega\mu_u$ is harmonic. 

However, we don't have the assumption that $G_\Omega\mu_u$ is a potential. We do know that if $\mu_u$ is a nice measure (e.g. a measure with compact support), then $G_\Omega\mu_u$ is a potential. Therefore, the idea of this proof is to approximate $\mu_u$ by considering an exhaustion of compact sets $\lbrace K_n\rbrace$ of $\Omega$ and the restriction of $\mu_u$ to $K_n$.

As a corollary of this theorem, if $W$ is a bounded open subset of $\Omega$ such that $\overline{W}\subset\Omega$, then $u$ has the following representation on $W$:

$$u(x)=\int_\Omega U_y(x)d\mu_u(y)+v(x)$$

for some harmonic function. To prove this, just notice that

$$
\begin{align*}
    u(x)&=G_\Omega\mu_u(x)+h(x)\\
    &=\int_\Omega G_\Omega(x,y)d\mu_u(y)+h(x)\\
    &=\int_\Omega U_y(x)d\mu_u(y)-\int_\Omega h_y(x)d\mu_u(y)+h(x)
\end{align*}
$$

and accept that the integral of a harmonic function is harmonic. In particular, when $N=2$, we have

$$
\begin{align*}
    u(x)=-\int_\Omega \ln |x-y|d\mu_u(y)+v(x)
\end{align*}
$$

When $N\geq 3$, we have

$$
\begin{align*}
    u(x)=\int_\Omega |x-y|^{2-N}d\mu_u(y)+v(x)
\end{align*}
$$



















