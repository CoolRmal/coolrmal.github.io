## A Sufficient Condition for Independence of Random Variables Using the Idea of Approximation

When I was reading a note about <a href="https://terrytao.wordpress.com/2010/02/10/245a-notes-5-free-probability/">Free Probability</a>, I learnt the following proposition:

<strong>Proposition 1: Givens two random variables $X,Y$. If for all pairs of bounded continuous functions $f,g:\mathbb{R}\rightarrow\mathbb{R}$, we have</strong>

$$E[f(X)g(Y)]=E[f(X)]E[g(Y)]$$

<strong>Then $X$ and $Y$ are independent.</strong>

Before going to the details of the proof, let's first discuss the general idea. Since the Borel $\sigma$-algebra of $\mathbb{R}$ is generated by the closed sets, it suffices to prove that for every pair of closed sets $A,B$, we have

$$P(X\in A, Y\in B)=P(X\in A)P(Y\in B)$$

We can also write this equality in the following way

$$E[\chi_{X\in A}\chi_{Y\in B}]=E[\chi_{X\in A}]E[\chi_{Y\in B}]$$

Now it looks much more closedly related to our assumption, but we cannot directly apply our assumption because the indicator function of a closed set is not necessarily continuous. However, we can try to approximate our target function by some nice functions, and if this approximation is strong enough (e.g. uniform convergence), then we are justified to interchange the order of limit and integration to complete the proof.

<em>Proof: </em>
For every closed set $S\subset \mathbb{R}$, there exists a sequence of uniformly bounded continuous functions $\lbrace f_n\rbrace$ that pointwise converges to $\chi_S$. This sequence can be found by using the Urysohn's lemma, or we can define it by using the following explicit formula:

$$f_n(x)=\max\lbrace 0, 1-n \cdot \text{dist}(x,S)\rbrace$$

Let $\lbrace g_n\rbrace, \lbrace h_n\rbrace$ be the corresponding sequences of uniformly bounded continuous functions that pointwise converge to $\chi_A, \chi_B$, respectively. $\lbrace g_n(X)\rbrace, \lbrace h_n(Y)\rbrace$ then pointwise converge to $\chi_{X\in A}, \chi_{Y\in B}$, respectively. By using the assumption, we have

$$
\begin{align*} 
E[g_n(X)h_n(Y)]&=E[g_n(X)]E[h_n(Y)]\\ 
\lim_nE[g_n(X)h_n(Y)]&=\lim_nE[g_n(X)]E[h_n(Y)]\\ 
&=(\lim_nE[g_n(X)])(\lim_nE[h_n(Y)])\\ 
E[\lim_n g_n(X)h_n(Y)]&=E[\lim_ng_n(X)]E[\lim_nh_n(Y)]\text{ (Dominated Convergence Theorem)}
\end{align*}
$$

Simplifying the last equality we get $E[1_A(X)1_B(Y)]=E[1_A(X)]E[1_B(Y)]$. $\square$

We can also use polynomials to approximate, which gives us a proposition similar to Proposition 1.

<strong>Proposition 2: Givens two bounded random variables $X,Y$. If for all pairs of nonnegative integers $n,m$, we have</strong>

$$E[X^nY^m]=E[X^n]E[Y^m]$$

<strong>Then $X$ and $Y$ are independent.</strong>

<em>Proof: </em>By Proposition 1, we only need to prove that for all pairs of bounded continuous functions $f,g$, we have

$$E[f(X)g(Y)]=E[f(X)]E[g(Y)]$$

Suppose $-M\leq X, Y\leq M$, then by the Stone-Weierstrass Theorem, there exists polynomials $\lbrace f_n\rbrace, \lbrace g_n\rbrace$ that converges uniformly to $f\chi_{[-M,M]}$ and $g\chi_{[-M,M]}$. For all $n$, $f_n$ and $g_n$ can be expressed as follows:

$$
\begin{align*} 
f_n(x)&=a_0+a_1x+\cdots a_mx^m\\ 
g_n(x)&=b_0+b_1x+\cdots b_kx^k\\ 
\end{align*}
$$

By the linearity of expectation, we have

$$
\begin{align*} E[f_n(X)g_n(Y)]&=E[\sum_{i,j}a_ib_jX^iY^j]\\ 
&=\sum_{ij}E[a_iX^i]E[b_jY^j]\\ 
&=E[f_n(X)]E[g_n(Y)] \end{align*}
$$

Taking limit on both side to get

$$
\begin{align*} \lim_nE[f_n(X)g_n(Y)]&=\lim_nE[f_n(X)]E[g_n(Y)]\\ 
E[f(X)g(Y)]&=E[f(X)]E[g(Y)] \end{align*}
$$

Notice that the boundedness of random variables is necessary for the use of the Stone-Weierstrass Theorem. $\square$

One should expects that trignometric polynomials can also be used to perform approximation and prove independence. We then can see how charactersitic functions are related to independence.

<strong>Proposition 3: Givens two bounded random variables $X,Y$. If for all pairs integers $n,m$, we have</strong>

$$E[e^{inX}e^{imY}]=E[e^{inX}]E[e^{imY}]$$

<strong>Then $X$ and $Y$ are independent.</strong>

Again one can use the Stone-Weierstrass Theorem. The proof is similar.



























