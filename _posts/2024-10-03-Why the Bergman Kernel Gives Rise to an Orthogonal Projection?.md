## Why the Bergman Kernel Gives Rise to an Orthogonal Projection?

I was reading Krantz's book *Fuction Theory of Several Complex Variables*, and I was not satisfied by the proof that the Bergman projection is represented by the Bergman kernel. This article aims at giving a little bit more details of this proof. Here's the setting.

<strong>Definition: </strong>Let $\Omega\subset \mathbb{C}^n$ be a domain (a connected open set). Let $L^2$ be the space of square integrable functions defined on $\Omega$. Let $A^2$ be the space of holomorphic, square integrable functions defined on $\Omega$, which is also called the Bergman space.

<strong>Remark 1: </strong>$L^2$ convergence of a sequence of $A^2$ functions implies uniform convergence on compact subsets of $\Omega$. Thus, $A^2\subset L^2$ is a closed subspace and a Hilbert space. The Hilbert space theory then tells us that there exists an orthogonal projection $P:L^2\rightarrow L^2$ such that

$$\forall f\in L^2, Pf\in A^2, f-Pf\perp A^2$$

$Pf$ is also the unique element in $A^2$ such that $f-Pf\perp A^2$. $P$ is called the Bergman projection.

<strong>Remark 2: </strong>$A^2$ is a reproducing kernel Hilbert space, which means that for each $z\in \Omega$, the point evaluation map $z\rightarrow f(z)$ belongs to $(A^2)^\*$. The Riesz representation theorem then ensures the existence of an $A^2$ function $k_z$ such that

$$\forall f\in A^2, f(z)=\int_{\Omega}f(\zeta)\overline{k_z(\zeta)}d\zeta$$

Define the Bergman kernel to be

$$K(z,\zeta):=\overline{k_z(\zeta)}$$

It can be shown that $K$ is conjugate symmetric. That is,

$$K(z,\zeta):=\overline{K(\zeta,z)}$$

Now $\forall f\in L^2$, we can define the integral expression 

$$If(z):=\int_{\Omega}f(\zeta)K(z,\zeta)d\zeta=\int_{\Omega}f(\zeta)\overline{k_z(\zeta)}d\zeta$$

$If$ is at least well-defined by the Cauchy-Schwarz inequality. The proof on Krantz's book goes like this: $I$ is a self-adjoint, idempotent operator on $L^2$, so it is the orthogonal projection onto its range $A^2$. In order to make this argument works, one need to check that $I$ is indeed an operator that sends an $L^2$ function to an $A^2$ function. I spent a lot of time thinking about why this is true, as the book does not adequately explain this issue. I wasted much of that time checking conditions for the integral of a holomorphic function being holomorphic, Minkowski's inequality, and the Fubini-Tonelli theorem. Eventually, I realized I could use the definition of $P$. $Pf\in A^2$ by definition and we have

$$
\begin{align*}
    If(z)=\int_{\Omega}f(\zeta)K(z,\zeta)d\zeta&=\int_{\Omega}(f(\zeta)-Pf(\zeta)+Pf(\zeta))K(z,\zeta)d\zeta\\
    &=\int_{\Omega}Pf(\zeta)K(z,\zeta)d\zeta\\
    &=Pf(z)
\end{align*}
$$

by orthogonality. We then can conclude that $P=I$ and $P$ is represented by the Bergman kernel. Therefore, I think this is actually an "easy" proof if one appeals to the definition of $P$ instead of just staring at $I$. One does not need to verify that $I$ is idempotent and self-adjoint, as $I=P$ and an orthogonal projection is always idempotent and self-adjoint.
