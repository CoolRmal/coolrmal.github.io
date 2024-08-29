## An Exercise about Uniform Integrability
<strong>Problem: </strong>Let $\lbrace X_k\rbrace_k$ be a sequence of independent random variables such that

$$E[X_k]=0, E[X_k^2]=1$$

Prove that $\lbrace\sum_{k=1}^n\frac{X_k}{\sqrt{n}}\rbrace_n$ are uniform integrable.

<strong>Solution: </strong>Lately, I’ve been thinking that learning mathematics is quite similar to cooking (I hope I can become a mathematician who also knows how to cook in the future). Let’s start solving this problem by preparing our ingredients—we need the following equivalent definition of uniform integrability:

<em>Ingredient: </em> $\lbrace X_k\rbrace_k$ are uniform integrable iff

$$\lim_{t\rightarrow 0}\sup_{k\geq 0}E[|X_k|\chi_{\lbrace|X_k|\geq t\rbrace}]=0$$
