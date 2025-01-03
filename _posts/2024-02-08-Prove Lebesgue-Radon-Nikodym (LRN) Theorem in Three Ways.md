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

Now suppose that $\lambda(\\{g<0\\})>0$.

$$\{g<0\}=\bigcup_{n \in \mathbb{N}}\left\{g<-\frac{1}{n}\right\}$$

There exists some $n$ such that $\lambda(\\{g<-\frac{1}{n}\\}) \neq 0$. Replace $f$ with $1_{\\{g<-\frac{1}{n}\\}}$ in equality (1), we get

$$
\begin{aligned}
0 & \leq \int_{\left\{g<-\frac{1}{n}\right\}} 1 d \nu=\int_{\left\{g<-\frac{1}{n}\right\}} g d \lambda \\
& \leq-\frac{1}{n} \lambda\left(\left\{g<-\frac{1}{n}\right\}\right)<0
\end{aligned}
$$

We have a strict inequality, which is a contradiction and suggests that $g\geq 0$ $\lambda-$a.e. Similarly, if $\lambda(\\{g>1\\})>0$, then

$\{g>1\}=\bigcup_{n \in \mathbb{N}}\{g>1+\frac{1}{n}\}$

Choose an $n$ such that $\lambda\left(\\{g>1+\frac{1}{n}\\}\right) \neq 0$. Replace $f$ with $1_{\\{g>1+\frac{1}{n}\\}}$ in equality (1) to get, 

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

This argument is taken from Folland's Real Analysis. Let's reexamine the theorem and notice that the RN derivative $f$ satisfies the following property:

$$
\forall E \in \mathcal{M}, \int_E f d \mu=\rho(E) \leq \nu(E)
$$


This naturally leads us to consider the set of all functions that satisfy the property above.

$$
\mathcal{F}=\left\{f: X \rightarrow[0, \infty]: \forall E \in \mathcal{M}, \int_E f d \mu \leq \nu(E)\right\}
$$


Let $\alpha=\sup \\{\int_X f d \mu: f \in \mathcal{F}\\}$. If we can prove that a maximizer $g$ (i.e. $\int_X g d \mu=\alpha$ ) satisfies $d \nu-g d \mu$ is singular with respect to $d \mu$ (which is a consequence of Lemma 3.7 on Folland's book), then we are done. How should we find this maximizer then? Well, a maximizing sequence $\\{f_n\\}$ clearly exists (i.e. $\int_X f_n d \mu \rightarrow \alpha$ ). Naively we want to take the pointwise limit of $\\{f_n\\}$, but this does not guarantee the convergence of the integral. The trick is to use the property that $\mathcal{F}$ is closed under $\max$ to show that $\\{\max \\{f_i: 1 \leq i \leq n\\}\\}_n$ is still a maximizing sequence that allows us to use MCT to change the order of limit and integral.

<br>

## RN Derivative as a Martingale

This argument is taken from Durrett's Probability. We'll actually prove a different version of Theorem 1.

Theorem 2: Let $\mathcal{F}$ be a countably generated $\sigma$-algebra. If $\mu$ is a finite measure and $\nu$ is a probability measure such that $\mu \ll \nu$, then there is an integrable function $g: X \rightarrow[0, \infty]$ so that $d \mu=g d \nu$.

The idea is to approximate the RN derivative $g$ by a sequence of random variables that is measurable with respect to a $\sigma$-algebra generated by finitely many sets. More specifically, let $\\{A_i\\}\_{i=1}^{\infty}$ be the sequence of sets that generates $\mathcal{F}$. Let $\mathcal{F}\_n=\sigma(\\{A_i\\}\_{i=1}^n)$. For each $n$, we can find a collections of set $\\{I_{k, n}\\}\_{k=1}^{K_n} \subset \mathcal{F}\_n$ that forms a partition of $X$ such that every set $E \in \mathcal{F}\_n$ is disjoint union of some $I_{k, n}$. Moreover, $\\{I_{k, n+1}\\}\_{k=1}^{K_{n+1}}$ is always a refinement of $\\{I_{k, n}\\}_{k=1}^{K_n}$. We now define the random variables $X_n \in \mathcal{F}_n$ :

$$
X_n=\sum_{k=1}^{K_n} \frac{\mu\left(I_{k, n}\right)}{\nu\left(I_{k, n}\right)} 1_{I_{k, n}}
$$


The most amazing part about this proof is that $\\{X_n\\}$ is a martingale. Let's first show that 

$$E\left[1_{I_{k, n+1}} \lvert \mathcal{F}_n\right]=\frac{\nu(I_{k, n+1})}{\nu(I_{j, n})} 1_{I_{j, n}}$$

where $I_{k, n+1} \subset I_{j, n}$. Our proposed random variable is clearly measurable with respect to $\mathcal{F}_n$. In addition,

$$
\begin{aligned}
\int_{I_{j, n}} \frac{\nu\left(I_{k, n+1}\right)}{\nu\left(I_{j, n}\right)} 1_{I_{j, n}} d \nu & =\nu\left(I_{k, n+1}\right) \\
& =\int_{I_{j, n}} 1_{I_{k, n+1}} d \nu
\end{aligned}
$$

which means that our proposed random variable is correct. Now we use linearity of conditional expectation to see that

$$
\begin{aligned}
E\left[X_{n+1} \mid \mathcal{F}_n\right] & =\sum_{k=1}^{K_{n+1}} \frac{\mu\left(I_{k, n+1}\right)}{\nu\left(I_{k, n+1}\right)} E\left[1_{I_{k, n+1}} \mid \mathcal{F}_n\right] \\
& =\sum_{j=1}^{K_n} \sum_{I_{k, n+1} \subset I_{j, n}} \frac{\mu\left(I_{k, n+1}\right)}{\nu\left(I_{k, n+1}\right)} \frac{\nu\left(I_{k, n+1}\right)}{\nu\left(I_{j, n}\right)} 1_{I_{j, n}} \\
& =\sum_{j=1}^{K_n} \sum_{I_{k, n+1} \subset I_{j, n}} \frac{\mu\left(I_{k, n+1}\right)}{\nu\left(I_{j, n}\right)} 1_{I_{j, n}} \\
& =\sum_{j=1}^{K_n} \frac{\mu\left(I_{j, n}\right)}{\nu\left(I_{j, n}\right)} 1_{I_{j, n}} \\
& =X_n
\end{aligned}
$$


Since we just show that $\\{X_n\\}$ is a (nonnegative) martingale, it converges a.e. to some $L^1$ random variable $g$. For any $A \in \mathcal{F}\_m \subset \mathcal{F}\_n$, where $m \leq n, A$ is some finite union of $I_{k, n}$.

$$
\begin{aligned}
\mu(A) & =\sum_{I_{k, n} \in A} \mu\left(I_{k, n}\right) \\
& =\sum_{I_{k, n} \in A} \frac{\mu\left(I_{k, n}\right)}{\nu\left(I_{k, n}\right)} \int_A 1_{I_{k, n}} d \nu \\
& =\int_A X_n d \nu
\end{aligned}
$$


Thus, $\lim \int_A X_n d \nu=\mu(A)$ for all $A \in \mathcal{G}:=\bigcup_n \mathcal{F}_n$. If we can change the order of limit and integral, then $d \mu=g d \nu$ on $\mathcal{F}$ by the $\pi-\lambda$ theorem. In order to justify this, one need to prove that $X_n$ is actually uniformly integrable (then we are done because uniform integrability implies $L^1$ convergence), which follows from the absolute continuity of $\mu$ with respect to $\nu$. We omit the details here.

<br>

