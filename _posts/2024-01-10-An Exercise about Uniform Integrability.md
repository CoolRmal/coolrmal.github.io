## An Exercise about Uniform Integrability
<strong>Problem: </strong>Let $\lbrace X_k\rbrace_k$ be a sequence of independent random variables such that

$$E[X_k]=0, E[X_k^2]=1$$

Prove that $\lbrace\sum_{k=1}^n\frac{X_k}{\sqrt{n}}\rbrace_n$ are uniform integrable.

<strong>Solution: </strong>Lately, I’ve been thinking that learning mathematics is quite similar to cooking (I hope I can become a mathematician who also knows how to cook in the future). Let’s start solving this problem by preparing our ingredients—we need the following equivalent definition of uniform integrability:

<em>Ingredient (Definition): </em> $\lbrace X_k\rbrace_k$ are uniform integrable iff

$$\lim_{t\rightarrow 0}\sup_{k\geq 0}E[|X_k|\chi_{\lbrace|X_k|\geq t\rbrace}]=0$$

We now can have a try of an appetizer:

<em>Appetizer (Lemma): </em>If there exists some $p>1$ such that 

$$\sup_{k\geq 0}E[|X_k|^p]<\infty$$

then $\lbrace X_k\rbrace_k$ are uniform integrable.

<em>Proof: </em> Let $q$ be the conjugate of $p$ ($p^{-1}+q^{-1}=1$). We use both Hölder's and Chebyshev's inequalities to deduce that

$$\begin{align*}
E[|X_k|\chi_{\lbrace|X_k|\geq t\rbrace}]&\leq (E[|X_k|^p])^{1/p}(P(|X_k|\geq t))^{1/q}\\
&\leq M^{1/p}(P(|X_k|\geq t))^{1/q}\\
&\leq M^{1/p}(\frac{E[|X_k|^p]}{t^p})^{1/q}\\
&\leq \frac{M}{t^{p-1}}
\end{align*}$$

Since $p>1$, we conclude that

$$\lim_{t\rightarrow 0}\sup_{k\geq 0}E[|X_k|\chi_{\lbrace|X_k|\geq t\rbrace}]\leq \lim_{t\rightarrow 0}\frac{M}{t^{p-1}}=0.\square$$

<em>Main Course (Proof of the Original Problem): </em>
By the lemma above, it suffices to prove that

$$\sup_{n\geq 0}E[|\frac{\sum_{k=1}^nX_k}{\sqrt{n}}|^2]<\infty$$

Let's do some calculations!

$$\begin{align*}
E[|\frac{\sum_{k=1}^nX_k}{\sqrt{n}}|^2]&=\frac{1}{n}E[(\sum_{k=1}^nX_k)^2]\\
&=\frac{1}{n}(\sum_{i\ne j}E[X_iX_j]+\sum_{i=1}^nE[X_i^2])\\
&=\frac{1}{n}(\sum_{i\ne j}E[X_i]E[X_j]+n)\\
&=1
\end{align*}$$

where we used the assumptions about mean and variance in the third equality. $\square$














