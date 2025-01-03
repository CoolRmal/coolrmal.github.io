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
\int_X f d \nu & =\int_X f g d \lambda\hspace{1mm}(1) \\
\int_X f(1-g) d \nu & =\int_X f g d \mu\hspace{1mm}(2)
\end{aligned}
$$

Now suppose that $\lambda(\{g<0\})>0$.

$$\{g<0\}=\bigcup_{n \in \mathbb{N}}\left\{g<-\frac{1}{n}\right\}$$

There exists some $n$ such that $\lambda\left(\left\{g<-\frac{1}{n}\right\}\right) \neq 0$. Replace $f$ with $1_{\left\{g<-\frac{1}{n}\right\}}$ in equality (1), we get

$$
\begin{aligned}
0 & \leq \int_{\left\{g<-\frac{1}{n}\right\}} 1 d \nu=\int_{\left\{g<-\frac{1}{n}\right\}} g d \lambda \\
& \leq-\frac{1}{n} \lambda\left(\left\{g<-\frac{1}{n}\right\}\right)<0
\end{aligned}
$$

We have a strict inequality, which is a contradiction and suggests that $g\geq 0$ $\lambda-$a.e. Similarly, if $\lambda(\{g>1\})>0$, then

$\{g>1\}=\bigcup_{n \in \mathbb{N}}\left\{g>1+\frac{1}{n}\right\}$

Choose an $n$ such that $\lambda\left(\left\{g>1+\frac{1}{n}\right\}\right) \neq 0$. Replace $f$ with $1_{\left\{g>1+\frac{1}{n}\right\}}$ in equality (1) to get, 

$$
\begin{aligned}
\lambda\left(\left\{g>1+\frac{1}{n}\right\}\right) & \geq \nu\left(\left\{g>1+\frac{1}{n}\right\}\right)=\int_{\left\{g>1+\frac{1}{n}\right\}} 1 d \nu \\
& =\int_{\left\{g>1+\frac{1}{n}\right\}} g d \lambda \geq\left(1+\frac{1}{n}\right) \lambda\left(\left\{g>1+\frac{1}{n}\right\}\right) \\
& >\lambda\left(\left\{g>1+\frac{1}{n}\right\}\right)
\end{aligned}
$$

Again, we obtain a contradiction because of the strict inequality. This means that $g\leq 1$ $\lambda-$a.e. We may thus assume that $0\leq g\leq 1$ everywhere. Consider the following two set and two measures induced by them:

$$
\begin{aligned}
& A=\{x: g(x)<1\}, \forall E \in \mathcal{M}, \nu_A(E)=\nu(A \cap E) \\
& B=\{x: g(x)=1\}, \forall E \in \mathcal{M}, \nu_B(E)=\nu(B \cap E)
\end{aligned}
$$

Clearly $\nu=\nu_A+\nu_B$. Our goal now is to show that $\nu_B\perp \mu$ and $d \nu_A=1_A(1-g)^{-1} g d \mu$.

1. Since $\nu_B(A)=0$, we only need to show $\mu(B)=0$ to conclude that $\nu_B\perp \mu$, which follows from replacing $f$ with $1_B$ in equality (2):

   $$
   \begin{aligned}
    0 & =\int_B 0 d \nu=\int_B(1-g) d \nu \\
    & =\int_B g d \mu=\int_B 1 d \mu=\mu(B)
   \end{aligned}
   $$

2. $d \nu_A=1_A(1-g)^{-1} g d \mu$ follows from replacing $f$ with $1_E1_A(1+g+g^2+\cdots+g^n)$ in equality (2) for any measurable set $E$:

    $$
   \begin{aligned}
\nu_A(E) & =\nu(A \cap E)=\int_E 1_A d \nu \\
& =\int_E 1_A\left(1+g+g^2+\cdots+g^n\right)(1-g) d \nu \\
& =\int_E 1_A\left(1+g+g^2+\cdots+g^n\right) g d \mu
\end{aligned}
$$

Since $0\leq g< 1$ on $A$, $\sum_ng^n$ is an increasing, convergent geometric series. Thus, we can use MCT to change the order of limit and integral:

$$\nu_A(E)=\lim \int_E 1_A\left(1+g+g^2+\cdots+g^n\right) g d \mu=\int_E 1_A(1-g)^{-1} g d \mu$$

A final remark: In the last step, we can not directly replace $f$ with $\chi_A(1-g)^{-1}$ in equality (2) because $\chi_A(1-g)^{-1}$ may not be in $L^2(\lambda)$.




<br>

## Measure Theoretic Viewpoint


<br>

## RN Derivative as a Martingale


<br>

