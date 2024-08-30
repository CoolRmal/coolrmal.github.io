## Uniqueness of the Euclidean Topology

Let's denote the usual Euclidean topology on $\mathbb{R}$ by $\mathcal{T}$. We know that in this topology, every interval of the form $(a,b)$ for some $-\infty\leq a<b\leq \infty$ is open, and every interval of the form $[c,d]$ for some $-\infty<c< d<\infty$ is compact. These are the properties within our expectations, or at least they kind of align with our intuition. The question we are concerned about in this blog is:

<strong>Is $\mathcal{T}$ the unique topology on $\mathbb{R}$ such that every interval of the form $(a,b)$ for some $-\infty\leq a<b\leq \infty$ is open, and every interval of the form $[c,d]$ for some $-\infty<c< d<\infty$ is compact?</strong>

Suppose $\mathcal{H}$ is a topology that satisfy these properties. Since $\lbrace(a,b)\rbrace$ form a basis for $\mathcal{T}$ and all of them are open in $\mathcal{H}$, $\mathcal{T}\subset\mathcal{H}$. Thus, it suffices to prove that for every $U\in \mathcal{H}$, $U$ is also open in the Euclidean sense. Given $x\in U$. We pick a finite interval $I=[a_x,b_x]$ that contains $x$. Denote the subspace topology of $\mathcal{H},\mathcal{T}$ on $I$ by $\mathcal{H}_I,\mathcal{T}_I$, respectively. Notice that the identity map 

$$\text{id}: (I,\mathcal{H}_I)\rightarrow (I,\mathcal{T}_I)$$

is continuous. Our assumption suggests that the domain is compact, which means that $\text{id}$ is a bijection from a compact space to a Hausdorff space and thus a homeomorphism. Since $U\cap (a_x,b_x)$ is open in $\mathcal{H}$ and homeomorphism maps open sets to open sets, $U\cap (a_x,b_x)=\text{id}(U\cap (a,b))$ is also open in $\mathcal{T}$. We then can write $U$ as $\bigcup_{x}U\cap (a_x,b_x)$, which further implies that $U$ is open in $\mathcal{T}$.
