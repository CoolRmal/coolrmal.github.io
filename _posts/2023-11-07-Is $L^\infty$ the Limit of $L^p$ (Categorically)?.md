## Is $L^\infty$ the Limit of $L^p$ (Categorically)?

Let $(X,\mu)$ be a measure space. According to Exercise 1.1.3 in GTM249, if $f\in L^{p_0}(X,\mu)$ for some $p_0<\infty$, then 

$$\lim_{p\rightarrow \infty}\parallel f\parallel_{L^p}=\parallel f\parallel_{L^\infty}$$

This is the reason why we sometimes say that the limit of $L^p$ is $L^\infty$. Can we see this from another perspective? That is, is the statement still true if we interpret the limit here as the categorical limit? Let's include the assumption that $\mu(X)$ is finite. Then for every pair of real numbers $p,q$ such that $p\leq q$, $1\leq p\leq q<\infty$, we have

$$L^q(X)\subset L^p(X)$$

If we view $\mathcal{P}(L^1(X))$ and $[1,\infty)$ as poset categories, then the above inclusion suggests that we have a diagram of type $[1,\infty)$, i.e. a functor from $[1,\infty)$ to $\mathcal{P}(L^1(X))$. Since $\bigcap_{p\in [1,\infty)}L^p(X)$ is the limit of this diagram, the question in the headline is just a fancy version of the following question:

<strong>Is $L^\infty(X)$ equal to $\bigcap_{p\in [1,\infty)}L^p(X)$ ?</strong>

Unfortunately, the answer is no in general. We will give an example here. Consider the measure space $([0,1],m)$ ($m$ is the Lebesgue measure) and the following function defined on $[0,1]$:

$$\begin{align*}
f(x)=\begin{cases}
1,  & x\in (\frac{1}{2},1]\\
2,  & x\in (\frac{1}{4},\frac{1}{2}]\\
\vdots\\
n,  & x\in (\frac{1}{2^n},\frac{1}{2^{n-1}}]\\
\end{cases}
\end{align*}$$

Clearly $f\notin L^\infty([0,1])$. However, it is in $L^p([0,1])$ for every $p\in [1,\infty)$ because

$$\parallel f\parallel_{L^p}^p=\int_0^1|f|^pdm=\sum_{n=1}^\infty\frac{n^p}{2^n}$$

which can be proved to be convergent by using the ratio test.
