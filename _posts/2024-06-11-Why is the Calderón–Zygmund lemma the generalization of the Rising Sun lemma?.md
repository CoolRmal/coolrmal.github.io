## Why is the Calderón–Zygmund lemma the generalization of the Rising Sun lemma?

Below is a commonly encountered lemma about continuous functions, which you can find in books like Stein's Real Analysis or on related Wikipedia pages. Let's call it Rising Sun Lemma 1:

<strong>Rising Sun Lemma 1: </strong>Let $G:\mathbb R\rightarrow \mathbb{R}$ be continuous and $E=\lbrace x:\exists y>x, g(y)>g(x)\rbrace$. Then $E$ is the union of at most countable disjoint open intervals $\{(a_k,b_k)\}_k$ such that if $(a_k,b_k)$ is a finite interval, then $G(a_k)=G(b_k)$.

<strong>Rising Sun Lemma 2: </strong>Let $f\in L^1(\mathbb{R})\cap L^+(\mathbb{R})$ and $\lambda>0$. There exists at most countable disjoint intervals $\lbrace I_k\rbrace_k$ such that
<ol>
  <li>$\forall k$, $\frac{1}{|I_k|}\int_{I_k}f(x)dx=\lambda$</li>
  <li>$f(x)\leq \lambda$ a.e. on $(\bigcup_kI_k)^c$.</li>
</ol>

This looks quite similar to the Calderón-Zygmund decomposition. In fact, it's an even finer result because in the Calderón-Zygmund decomposition, you can only obtain
</p>$$\lambda< \frac{1}{|I_k|}\int_{I_k}f(x)dx\leq 2\lambda$$<p>
