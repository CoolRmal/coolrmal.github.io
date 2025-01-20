## Can We Deduce Separability of a Space from Its Product $\sigma$-Algebra?

People who use Folland's real analysis as their introductory textbook for measure theory have probably seen the following statement. We use $\mathcal{B}$ to denote a Borel $\sigma-$algebra.

<strong>Theorem 1: </strong>Let $X_1,\cdots, X_n$ be metric space and let $\Pi_{j=1}^nX_j$ equipped with the product metric. Then $\otimes \mathcal{B}\_{X_j}\subset \mathcal{B}\_{\Pi_{j=1}^nX_j}$. If the $X_j$'s are separable, then $\otimes_{j=1}^n \mathcal{B}\_{X_j}=\mathcal{B}\_{\Pi_{j=1}^nX_j}$.

Hence, if $\otimes_{j=1}^n \mathcal{B}\_{X_j}\ne\mathcal{B}_{\Pi_{j=1}^nX_j}$, then one of the $X_j$'s must be nonseparable. I will give a concrete example to illustrate this.

<strong>Theorem 2: </strong>Let $X$ be a Hausdorff space of cardinality greater than that of the continuum. Then $\mathcal{B}\_X\otimes \mathcal{B}\_X\ne \mathcal{B}_{X\times X}$.

<em>Proof: </em> $\mathcal{B}\_X\otimes \mathcal{B}\_X$ is always a subset of $\mathcal{B}\_{X\times X}$. Therefore, we just need to find some set $S\subset X$ such that $S\in \mathcal{B}\_{X\times X}-\mathcal{B}\_X\otimes \mathcal{B}\_X$. Our candidate for $S$ is the diagonal $\Delta:=\{(x,x):x\in X\}$, which is closed (because $X$ is Hausdorff) and thus belongs to $\mathcal{B}_{X\times X}$.

The idea is to show that $\Delta$ does not belong to a larger $\sigma-$algebra $\mathcal{E}$ containing $\mathcal{B}_X\otimes \mathcal{B}_X$. $\mathcal{E}$ is defined as follows:

$$\mathcal{E}:=\{E\subset X: \text{ both }E, E^c\text{ are representable as unions \\
of the continuum (or fewer) of rectangles } A\times B, A, B \subset X\}$$

Suppose we already know that $\mathcal{E}$ is a $\sigma-$algebra containing $\mathcal{B}_X\otimes \mathcal{B}_X$. We then need to prove that $\Delta\notin \mathcal{E}$. Indeed suppose

$$\Delta=\bigcup_{r\in \mathbb{R}}(A_r\times B_r)$$

WLOG we can assume each $A_r, B_r$ are nonempty. $A_r$ cannot contains two distinct points $x,y$. Otherwise for some $z\in B_r$, either $x\ne z\Rightarrow (x,z)\notin \Delta$ or $y\ne z\Rightarrow (y,z)\notin \Delta$. In both cases, we arrive at a contradiction. Similarly, $B_r$ must be a singleton. $A_r\times B_r=\{(x,x)\}$ for some $x\in X$, and the union $\bigcup_{r\in \mathbb{R}}(A_r\times B_r)$ has cardinality at most that of the continuum. However, the cardinality of $\Delta$ is greater than that of the continuum by our assumption, which leads to a contradiction.
    
To finish the proof, we need to show that $\mathcal{E}$ is a $\sigma-$algebra containing $\mathcal{B}\_X\otimes \mathcal{B}\_X$. By definition, $\mathcal{E}$ contains all the rectangles and is closed under complement. The only nontrivial part is to show that $\mathcal{E}$ is closed under countable union. Indeed if $\{E_i\}\_{i=1}^\infty\subset \mathcal{E}$ such that for each $i$, $E_i=\bigcup_{r\in \mathbb{R}}(A^i_r\times B^i_r)$ and $E_i^c=\bigcup_{r\in \mathbb{R}}(C^i_r\times D^i_r)$, then

$$
\begin{align*}
        \bigcup_{i=1}^\infty E_i&=\bigcup_{i=1}^\infty\bigcup_{r\in \mathbb{R}}(A^i_r\times B^i_r)\\
        (\bigcup_{i=1}^\infty E_i)^c&=\bigcap_{i=1}^\infty\bigcup_{r\in \mathbb{R}}(C^i_r\times D^i_r)=\bigcup_{(r_i)_{i=1}^\infty\in \mathbb{R}^{\mathbb{N}}}\bigcap_{i=1}^\infty(C^i_{r_i}\times D^i_{r_i})=\bigcup_{(r_i)_{i=1}^\infty\in \mathbb{R}^{\mathbb{N}}}(\bigcap_{i=1}^\infty C^i_{r_i}\times \bigcap_{i=1}^\infty D^i_{r_i})
\end{align*}
$$

Since $\mathbb{R}^{\mathbb{N}}$ and $\mathbb{R}$ have the same cardinality, $\bigcup_{i=1}^\infty E_i$ and its complement are still representable as unions of the continuum of rectangles. $\square$

Let $X$ be the power set of $\mathbb{R}$ with the discrete topology, which is also a nonseparable metric space. $X$ satisfies the assumption of Theorem 2.

A natural question to ask is whether the converse of Theorem 1 is true.

<strong>Conjecture 1: </strong>If $X_1,\cdots, X_n$ are metric spaces such that $\otimes_{j=1}^n \mathcal{B}\_{X_j}=\mathcal{B}\_{\Pi_{j=1}^nX_j}$, then each $X_j$ is separable.

Unfortunately, the answer is no. Many readers of Folland's book overlook the following, more general version of Theorem 1, which can be proven in a more elegant way. It is understandable, however, that Folland does not include this theorem, as the book does not assume students to be familiar with point-set topology at the beginning.

<strong>Theorem 3: </strong>Let $X,Y$ be topological spaces such that $Y$ is second countable. Then $\mathcal{B}\_X\otimes \mathcal{B}\_Y=\mathcal{B}\_{X\times Y}$.

<em>Proof: </em> $\mathcal{B}\_X\otimes \mathcal{B}\_Y\subset \mathcal{B}_{X\times Y}$ can be proven by following Folland's proof of Theorem 1. For the other direction, it suffices to show that every open set $U\subset X\times Y$ belongs to $\mathcal{B}_X\otimes \mathcal{B}_Y$. Let $\{V_n\}\_{n=1}^\infty$ be a countable basis of $Y$. Define

$$I:=\{n\in \mathbb{N}:\exists \text{ open set }W\subset X\text{ such that }W\times V_n\subset U\}$$

$I$ is clearly countable. For each $i\in I$, we can define $W_i$ to be the union of all open sets $W\subset X$ such that $W\times V_i\subset U$. By the definition of product topology, we can then express $U$ in the following way:

$$U=\bigcup_{i\in I}(W_i\times V_i)$$

Since $W_i$ is open, $W_i\times V_i\in \mathcal{B}_X\otimes \mathcal{B}_Y$. As $U$ is a countable union of elements in $\mathcal{B}_X\otimes \mathcal{B}_Y$, $U\in \mathcal{B}_X\otimes \mathcal{B}_Y$. $\square$

The intuition for this proof is that since $Y$ is second countable, one can decompose an open set in $X\times Y$ into countable parts by expanding it along the bases of $Y$ (I think this is similar to the idea of a fiber bundle). Theorem 2 still holds in the case that $X$ is a nonseparable metric space (e.g. $\mathbb{R}$ with the discrete metric) and $Y$ is any separable metric space (e.g. $\mathbb{R}$ with the Euclidean metric), which gives rise to many concrete counterexamples to Conjecture 1.

Is it possible for a weaker version of Conjecture 1 (e.g. the converse of Theorem 2) to hold? 

<strong>Conjecture 2: </strong>If $X_1,\cdots, X_n$ are metric spaces such that $\otimes_{j=1}^n \mathcal{B}\_{X_j}=\mathcal{B}\_{\Pi_{j=1}^nX_j}$, then one of $X_j$ is separable.

This conjecture is also false, at least if you assume the continuum hypothesis. In the following, we will construct a nonseparable metric space $X$ such that $B_X\otimes B_X=B_{X\times X}$.

<strong>Definitions: </strong>Let $\omega_1$ be the first uncountable ordinal. Let $\mathcal{P}(\omega_1)$ be the power set of $\omega_1$ and $\mathcal{P}(\omega_1\times\omega_1)$ be the power set of $\omega_1\times\omega_1$. 

We will show that $\mathcal{P}(\omega_1)\otimes \mathcal{P}(\omega_1)=\mathcal{P}(\omega_1\times\omega_1)$. We first need several lemmas.

<strong>Lemma 4: </strong>Suppose that $(X,\mathcal{A})$ and $(Y,\mathcal{B})$ are measurable
spaces and $f:X\rightarrow \mathbb{R}$ and $g:Y\rightarrow \mathbb{R}$ are measurable functions. Then the following function is $(\mathcal{A}\otimes \mathcal{B},\mathcal{B}_{\mathbb{R}^2})-$measurable:

$$h:X\times Y\rightarrow \mathbb{R}^2, h(x,y)=(f(x),g(y))$$

<em>Proof: </em> Suppose $I,J$ are measurable sets in $\mathcal{B}_{\mathbb{R}}$, then $h^{-1}(I\times J)=f^{-1}(I)\times g^{-1}(J)\in \mathcal{A}\otimes \mathcal{B}$. Define

$$\mathcal{F}:=\{E\in \mathcal{B}_{\mathbb{R}^2}:h^{-1}(E)\in \mathcal{A}\otimes \mathcal{B}\}$$

$\mathcal{F}$ is a $\sigma-$algebra containing all the measurable rectangle. Thus, $\mathcal{F}=\mathcal{B}_{\mathbb{R}^2}$. $\square$

<strong>Lemma 5: </strong>Let $S$ be a subset of $\omega_1$. For every function $f:S\rightarrow \omega_1$, the graph of the function $\Gamma_f:=\{(x,f(x)):x\in S\}\subset S\times \omega_1$ is in $\mathcal{P}(\omega_1)\otimes \mathcal{P}(\omega_1)$.

<em>Proof: </em> $f$ is $(\mathcal{P}(S),\mathcal{P}(\omega_1))$-measurable. By the continuum hypothesis, there exists a bijection $j:\omega_1\rightarrow \mathbb{R}$, which is $(\mathcal{P}(\omega_1),\mathcal{B}\_{\mathbb{R}})$-measurable. $j\circ f$ is then $(\mathcal{P}(S),\mathcal{B}_\mathbb{R})$-measurable. We can then define the following function:

$$h:S\times \omega_1\rightarrow \mathbb{R}\times \mathbb{R}, h(x,y)=(j(f(x)),j(y))$$

$h$ is $(\mathcal{P}(S)\otimes \mathcal{P}(\omega_1),\mathcal{B}_{\mathbb{R}^2})$-measurable by Lemma 4. $\Gamma_f$ is then in $\mathcal{P}(S)\otimes \mathcal{P}(\omega_1)\subset \mathcal{P}(\omega_1)\otimes \mathcal{P}(\omega_1)$ because it is equal to the preimage of the diagonal $\{(r,r):r\in \mathbb{R}\}\subset \mathbb{R}^2$ under $h$. $\square$

<strong>Lemma 5: </strong>Suppose $S$ is a subset of $\omega_1$ such that for every $x\in \omega_1,$ the $x$-section $S_x:=\{y:(x,y)\in S\}$ is at most countable. Then $S\in \mathcal{P}(\omega_1)\otimes \mathcal{P}(\omega_1)$. The result is also true if every $y-$section $S_y:=\{x:(x,y)\in S\}$ is at most countable.

<em>Proof: </em> Here's a visualization of this proof.

<div align="center">
<img width="500" src="https://github.com/user-attachments/assets/074c37bf-a204-48bd-99e3-fdfa87ed811c" />
</div>

We see that $S$ can be viewed as a countable union of graphs. Thus by Lemma 5, $S\in \mathcal{P}(\omega_1)\otimes \mathcal{P}(\omega_1)$. $\square$









