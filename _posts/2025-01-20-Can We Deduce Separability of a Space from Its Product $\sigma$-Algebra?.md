## Can We Deduce Separability of a Space from Its Product $\sigma$-Algebra?

People who use Folland's real analysis as their introductory textbook for measure theory have probably seen the following statement. We use $\mathcal{B}$ to denote a Borel $\sigma-$algebra.

<strong>Theorem 1: </strong>Let $X_1,\cdots, X_n$ be metric space and let $\Pi_{j=1}^nX_j$ equipped with the product metric. Then $\otimes \mathcal{B}_{X_j}\subset \mathcal{B}_{\Pi_{j=1}^nX_j}$. If the $X_j$'s are separable, then $\otimes_{j=1}^n \mathcal{B}_{X_j}=\mathcal{B}_{\Pi_{j=1}^nX_j}$.

Hence, if $\otimes_{j=1}^n \mathcal{B}_{X_j}\ne\mathcal{B}_{\Pi_{j=1}^nX_j}$, then one of the $X_j$'s must be nonseparable. I will give a concrete example to illustrate this.

<strong>Theorem 2: </strong>Let $X$ be a Hausdorff space of cardinality greater than that of the continuum. Then $\mathcal{B}_X\otimes \mathcal{B}_X\ne \mathcal{B}_{X\times X}$.

<em>Proof: </em> 

$\mathcal{B}_X\otimes \mathcal{B}_X$ is always a subset of $\mathcal{B}_{X\times X}$. Therefore, we just need to find some set $S\subset X$ such that $S\in \mathcal{B}_{X\times X}-\mathcal{B}_X\otimes \mathcal{B}_X$. Our candidate for $S$ is the diagonal $\Delta:=\{(x,x):x\in X\}$, which is closed (because $X$ is Hausdorff) and thus belongs to $\mathcal{B}_{X\times X}$.

The idea is to show that $\Delta$ does not belong to a larger $\sigma-$algebra $\mathcal{E}$ containing $\mathcal{B}_X\otimes \mathcal{B}_X$. $\mathcal{E}$ is defined as follows:

$$\mathcal{E}:=\{E\subset X: \text{ both }E, E^c\text{ are representable as unions of the continuum (or fewer) of rectangles } A\times B,
A, B \subset X\}$$

Suppose we already know that $\mathcal{E}$ is a $\sigma-$algebra containing $\mathcal{B}_X\otimes \mathcal{B}_X$. We then need to prove that $\Delta\notin \mathcal{E}$. Indeed suppose

$$\Delta=\bigcup_{r\in \mathbb{R}}(A_r\times B_r)$$

WLOG we can assume each $A_r, B_r$ are nonempty. $A_r$ cannot contains two distinct points $x,y$. Otherwise for some $z\in B_r$, either $x\ne z\Rightarrow (x,z)\notin \Delta$ or $y\ne z\Rightarrow (y,z)\notin \Delta$. In both cases, we arrive at a contradiction. Similarly, $B_r$ must be a singleton. $A_r\times B_r=\{(x,x)\}$ for some $x\in X$, and the union $\bigcup_{r\in \mathbb{R}}(A_r\times B_r)$ has cardinality at most that of the continuum. However, the cardinality of $\Delta$ is greater than that of the continuum by our assumption, which leads to a contradiction.
    
To finish the proof, we need to show that $\mathcal{E}$ is a $\sigma-$algebra containing $\mathcal{B}_X\otimes \mathcal{B}_X$. By definition, $\mathcal{E}$ contains all the rectangles and is closed under complement. The only nontrivial part is to show that $\mathcal{E}$ is closed under countable union. Indeed if $\{E_i\}_{i=1}^\infty\subset \mathcal{E}$ such that for each $i$, $E_i=\bigcup_{r\in \mathbb{R}}(A^i_r\times B^i_r)$ and $E_i^c=\bigcup_{r\in \mathbb{R}}(C^i_r\times D^i_r)$, then

$$
\begin{align*}
        \bigcup_{i=1}^\infty E_i&=\bigcup_{i=1}^\infty\bigcup_{r\in \mathbb{R}}(A^i_r\times B^i_r)\\
        (\bigcup_{i=1}^\infty E_i)^c&=\bigcap_{i=1}^\infty\bigcup_{r\in \mathbb{R}}(C^i_r\times D^i_r)=\bigcup_{(r_i)_{i=1}^\infty\in \mathbb{R}^{\mathbb{N}}}\bigcap_{i=1}^\infty(C^i_{r_i}\times D^i_{r_i})=\bigcup_{(r_i)_{i=1}^\infty\in \mathbb{R}^{\mathbb{N}}}(\bigcap_{i=1}^\infty C^i_{r_i}\times \bigcap_{i=1}^\infty D^i_{r_i})
\end{align*}
$$

Since $\mathbb{R}^{\mathbb{N}}$ and $\mathbb{R}$ have the same cardinality, $\bigcup_{i=1}^\infty E_i$ and its complement are still representable as unions of the continuum of rectangles. $\square$
