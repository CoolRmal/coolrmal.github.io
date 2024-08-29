## Why is the Calderón–Zygmund lemma the generalization of the Rising Sun lemma?

Below is a commonly encountered lemma about continuous functions, which you can find in books like Stein's Real Analysis or on related Wikipedia pages. Let's call it Rising Sun Lemma 1:

<strong>Rising Sun Lemma 1: </strong>Let $G:\mathbb R\rightarrow \mathbb{R}$ be continuous and $E=\lbrace x:\exists y>x, g(y)>g(x)\rbrace$. Then $E$ is the union of at most countable disjoint open intervals $\{(a_k,b_k)\}_k$ such that if $(a_k,b_k)$ is a finite interval, then $G(a_k)=G(b_k)$.

<strong>Rising Sun Lemma 2: </strong>Let $f\in L^1(\mathbb{R})\cap L^+(\mathbb{R})$ and $\lambda>0$. There exists at most countable disjoint intervals $\lbrace I_k\rbrace_k$ such that
<ol>
  <li>$\forall k$, $\frac{1}{|I_k|}\int_{I_k}f(x)dx=\lambda$</li>
  <li>$f(x)\leq \lambda$ a.e. on $(\bigcup_kI_k)^c$.</li>
</ol>

This looks quite similar to the Calderón-Zygmund decomposition. In fact, it's an even finer result because in the Calderón-Zygmund decomposition, you can only obtain

$$\lambda< \frac{1}{|I_k|}\int_{I_k}f(x)dx\leq 2\lambda$$

So how can we prove Rising Sun Lemma 2? Of course it uses Rising Sun Lemma 1. Define the function

$$G(x)=\int_{-\infty}^xf(x)dx-\lambda x$$

It’s easy to verify that $G$ is continuous and satisfies $G(-\infty)=\infty$, $G(\infty)=-\infty$ (by the integrability of $f$). Therefore, using Rising Sun Lemma 1, you obtain countably many finite intervals $\lbrace (a_k,b_k) \rbrace_k$ such that $G(a_k)=G(b_k)$, from which we easily deduce the first statement in Rising Sun Lemma 2. By using the Lebesgue Differentiation Theorem, you can further know that the derivative $G'$ exists a.e. and equal to $f(x)-\lambda$. Since is decreasing outside $\bigcup_k(a_k,b_k)$ (this can be understood by looking at the diagram of the Rising Sun Lemma or verifying the definition of 
𝑓
f), so 
𝑓
f on these regions 
𝐼
𝑛
I 
n
​
https://en.wikipedia.org/wiki/Rising_sun_lemma#/media/File:Rising_sun_lemma.svg
 .
