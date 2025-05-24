## Best Constant in the Weak Type Inequality of the Dyadic Maximal Function

Let $\mathscr{D}$ be the collection of all dyadic cubes of $\mathbb{R}^n$. Let $\mu$ be a Borel measure on $\mathbb{R}^n$ such that $\mu(Q)<\infty$ for each $Q\in \mathscr{D}$. For any locally integrable function $f$, we define its average over a dyadic cube $Q$ to be

$$\langle f\rangle_Q:= \begin{cases}
\frac{1}{\mu(Q)}\int_Q|f(y)|d\mu(y), & \mu(Q)\ne 0\\
0, & \mu(Q)=0
\end{cases}.$$

We define the dyadic maximal function of $f$ to be 

$$M^\mu_d(f)(x):=\sup_{\mathscr{D}\ni Q\ni x}\langle |f|\rangle_Q.$$

<strong>Question: </strong>What is the smallest constant $C>0$ such that the following inequality holds 

$$\|M^\mu_d(f)\|_{L^{1,\infty}(\mu)}\leq C\|f\|_{L^1(\mu)}$$

for all $f\in L^1(\mu)$? Equivalently, what is the operator norm $\|M_d^\mu\|_{L^1\rightarrow L^{1,\infty}}$? In particular, we are interested in the case that $\mu$ is the Lebesgue measure.

<strong>Answer: </strong>Suppose that the $\mu$-measure of each $d$-dimensional quadrant in $\mathbb{R}^d$ is infinite. Then $\|M_d^\mu\|_{L^1\rightarrow L^{1,\infty}}=1$. 

The condition that each quadrant has infinite measure may seem weird, but it holds for the Lebesgue measure. Moreover, this property is needed for the next lemma.

<strong>Lemma: </strong>For each $\lambda>0$, there exists a collection of disjoint dyadic cubes $\{Q_j\}$ such that

$$\{M_d^\mu(f)>\lambda\}=\bigcup_j Q_j,$$

where the cubes are maximal in the sense that for all dyadic cubes $Q\supsetneq Q_j$, 

$$\langle |f|\rangle_Q\leq \lambda <\langle |f|\rangle_{Q_j}.$$

<em>Proof: </em> By the definition of $M_d^\mu(f)$, for each point $x$ such that $M_d^\mu(f)(x)>\lambda$, we can find a dyadic cube $Q$ containing $x$ such that

$$\lambda <\langle |f|\rangle_{Q}.$$

As the $\mu$-measure of each quadrant is infinite and $f\in L^1(\mu)$, $\langle |f|\rangle_{Q}\rightarrow 0$ as $Q$ gets larger and larger. Hence, eventually we will have $\langle |f|\rangle_{Q}\leq \lambda$, and a maximal dyadic cube $Q^x$ containing $x$ must exist. As a result, 

$$\{M_d^\mu(f)>\lambda\}\subset \bigcup_x Q^x$$

Notice that for every point $y\in Q^x$, $M_d^\mu(f)(y)\geq \langle |f|\rangle_{Q^x}>\lambda$. Therefore, 

$$Q^x\subset \{M_d^\mu(f)>\lambda\}$$

and

$$\{M_d^\mu(f)>\lambda\}=\bigcup_x Q^x$$

Lastly, we show that if $Q_1$ and $Q_2$ are distinct maximal dyadic cubes, then they are disjoint. We know that two dyadic cubes are either disjoint or one of them is contained in the other. Assume WLOG $Q_1\subset Q_2$. As $Q_1\ne Q_2$, $Q_1\subsetneq Q_2$. By the maximality of $Q_1$ and $Q_2$, we have

$$\lambda <\langle |f|\rangle_{Q_2}\leq \lambda <\langle |f|\rangle_{Q_1}.$$

This is absurd. $\square$

<em>Remark: </em>As we only have countably many dyadic cubes, $\{M_d^\mu(f)>\lambda\}$ is a countable union of disjoint maximal dyadic cubes $\{Q_j\}$.

Now we are ready to prove that $\|M_d^\mu\|_{L^1\rightarrow L^{1,\infty}}=1$. Indeed, $\|M_d^\mu\|_{L^1\rightarrow L^{1,\infty}}\leq 1$ because for each $\lambda>0$, we have

$$
\begin{align*}
\lambda \mu(\{M_d^\mu(f)>\lambda\})&=\sum_j\lambda \mu(Q_j)\\
&\leq \sum_j \langle |f|\rangle_{Q_j}\mu(Q_j)\\
&\leq \sum_j\int_{Q_j}|f|d\mu\\
&=\int_{\bigcup_jQ_j}|f|d\mu\\
&\leq \|f\|_{L^1(\mu)}.
\end{align*}
$$

This calculation implies that

$$\|M_d^\mu(f)\|_{L^{1,\infty}(\mu)}\leq \|f\|_{L^1(\mu)}.$$

We also need to show that $1$ is the best constant. As each $d$-dimensional quadrant has infinite measure and $\mu$ is locally finite, there must exist some dyadic cube $Q^*$ such that $0<\mu(Q^*)<\infty$. Consider the indicator function $g:=1_{Q^*}$. Let $C$ be any constant such that the inequality

$$\|M^\mu_d(f)\|_{L^{1,\infty}(\mu)}\leq C\|f\|_{L^1(\mu)}$$

holds for all $f\in L^1(\mu)$. Observe that for all $0<\varepsilon<1$ and any point $x\in Q^*$, we have

$$M_d^\mu(g)(x)\geq \langle |g|\rangle_{Q^*}=1>1-\varepsilon.$$

Thus, $Q^*\subset \{M_d^\mu(g)>1-\varepsilon\}$. We can then deduce that

$$
\begin{align*}
C\|g\|_{L^1(\mu)}\geq (1-\varepsilon)\mu(\{M_d^\mu(g)>1-\varepsilon\})&\geq (1-\varepsilon)\mu(Q^*),\\
C\mu(Q^*)&\geq (1-\varepsilon)\mu(Q^*),\\
C&\geq 1-\varepsilon.
\end{align*}
$$

As this inequality is true for all sufficiently small $\varepsilon$, we conclude that

$$C\geq 1$$

and

$$\|M_d^\mu\|_{L^1\rightarrow L^{1,\infty}}=1.$$
