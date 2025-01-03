# Prove Lebesgue-Radon-Nikodym (LRN) Theorem in Three Ways

> "Most mathematicians prove what they can, von Neumann proves what he wants."

Theorem 1 (LRN): Let $\nu,\mu$ be finite positive measures on a measure space $(X,\mathcal{M})$. There exists positive measures $\lambda,\rho$ on $(X,\mathcal{M})$ and an integrable function $f:X\rightarrow [0,\infty]$ such that

$$\lambda \perp \mu, \rho \ll \mu, \nu=\lambda+\rho, d \rho=f d \mu$$

This is actually a simplified version. However, the uniqueness of this decomposition and generalization to the case of finite signed measures or complex measures are easy. Therefore, I'll mainly focus on Theorem 1 and present three different mathematical ideas related to the existence of this decomposition in this article.

<br>

## Self-duailty of $L^2$

This argument is due to von Neumann. It also appears in one of the exercises on Folland's book and is presented in Rudin's book. Let $\lambda=\mu+\nu$. Consider the map $f \in L^2(\lambda) \rightarrow \int_X f d \nu$. This is a bounded linear functional on $L^2(\lambda)$ because by the Cauchy-Schwartz inequality, we have

$$\left|\int_X f d \nu\right| \leq(\nu(X))^{1 / 2}\|f\|_{L^2(\nu)} \leq(\nu(X))^{1 / 2}\|f\|_{L^2(\lambda)}$$

We have the last inequality because

$$
\begin{aligned}
\|f\|_{L^2(\nu)} & =\left(\int_X f^2 d \nu\right)^{1 / 2} \\
& \leq\left(\int_X f^2 d \mu+\int_X f^2 d \nu\right)^{1 / 2} \\
& =\left(\int_X f^2 d \lambda\right)^{1 / 2} \\
& =\|f\|_{L^2(\lambda)}
\end{aligned}
$$

Since $L^2(\lambda)$ is a Hilbert space, it is self-dual by the Riesz representation theorem, which suggests that there exists some $g\in L^2(\lambda)$ with $\|g\|_{L^2(\lambda)} \leq(\nu(X))^{1 / 2}$ such that for all $f \in L^2(\lambda)$,

$$
\begin{aligned}
\int_X f d \nu & =\int_X f g d \lambda(1) \\
\int_X f(1-g) d \nu & =\int_X f g d \mu(2)
\end{aligned}
$$

Now suppose that $\lambda(\\{g<0\\})>0$.

$$\{g<0\}=\bigcup_{n \in \mathbb{N}}\left\{g<-\frac{1}{n}\right\}$$


<br>

## Measure Theoretic Viewpoint


<br>

## RN Derivative as a Martingale


<br>

