## Solutions to the Practice Final for MATH2510: Algebra, Fall 2024, Brown University

<strong>Problem 1.</strong> VII.6.4. (Algebra: Chapter 0) Let $k\subset E$ be a finite separable extension. Prove that $E$ may be identified with an intermediate field of a Galois extension $k\subset F$ of $k$. In fact, prove that there is a smallest such extension $k\subset F$, in the sense that if $k\subset E\subset K$, with $k\subset K$ Galois, then there exists an embedding of $F$ in $K$ which is the identity on $E$. (The extension $k\subset F$ is the Galois closure of the extension $k\subset E$.)

<em>Proof: </em> Since every finite separable extension is simple, $E=k(\alpha)$. Let $g$ be the minimal polynomial of $\alpha$. $g$ is separable. Let $k\subset F$ be the splitting field of $g$. $k\subset F$ is then a Galois extension, and $E$ is clearly an intermediate field of $F$.

We claim that $F$ is also the Galois closure. Suppose $k\subset E\subset K$ for some Galois extension $k\subset K$. $k\subset K$ is the a normal extension. Since $g$ has a root in $E\subset K$, $g$ splits in $K$. $K$ thus contains the splitting field $F$. $\square$

<br>

<strong>Problem 2.</strong> VII.6.6. (Algebra: Chapter 0)
- Show that $\mathbb{Q}\subset \mathbb{Q}(\sqrt{2+\sqrt{2}})$ is a Galois extension and its Galois group is cyclic.
  
  <em>Proof: </em> $\sqrt{2+\sqrt{2}}$ is the root to the following polynomial:
     
  $$x^4-4x^2+2=(x-\sqrt{2+\sqrt{2}})(x+\sqrt{2+\sqrt{2}})(x-\sqrt{2-\sqrt{2}})(x+\sqrt{2-\sqrt{2}})$$
     
  which is clearly separable. It is irreducible in $\mathbb{Z}$ by Eisenstein's criterion and thus also irreducible in $\mathbb{Q}$. Notice that $\sqrt{2-\sqrt{2}}\in \mathbb{Q}(\sqrt{2+\sqrt{2}})$ because

  $$
  \begin{align*}
  \sqrt{2-\sqrt{2}}&=\frac{\sqrt{2}}{\sqrt{2+\sqrt{2}}}\\
  &=\frac{(\sqrt{2+\sqrt{2}})^2-2}{\sqrt{2+\sqrt{2}}}
  \end{align*}
  $$
     
  It follows that $\mathbb{Q}(\sqrt{2+\sqrt{2}})$ is the splitting field of the separable irreducible polynomial $x^4-4x^2+2$ and thus a Galois extension. Both the degree of extension and $\left\lvert\text{Aut}\_{\mathbb{Q}}(\mathbb{Q}(\sqrt{2+\sqrt{2}}))\right\lvert$ are equal to $4$. Recall that every root of $x^4-4x^2+2$ corresponds to an automorphism in $\text{Aut}\_{\mathbb{Q}}(\mathbb{Q}(\sqrt{2+\sqrt{2}}))$. Let $f\in \text{Aut}_{\mathbb{Q}}(\mathbb{Q}(\sqrt{2+\sqrt{2}}))$ be the automorphism that corresponds to $\sqrt{2-\sqrt{2}}$ (i.e. $f(\sqrt{2+\sqrt{2}})=\sqrt{2-\sqrt{2}}$). Then,
     
     $$
     \begin{align*}
      f(f(\sqrt{2+\sqrt{2}}))&=f(\sqrt{2-\sqrt{2}})\\
      &=f(\frac{(\sqrt{2+\sqrt{2}})^2-2}{\sqrt{2+\sqrt{2}}})\\
      &=\frac{f(\sqrt{2+\sqrt{2}})^2-2}{f(\sqrt{2+\sqrt{2}})}\\
      &=\frac{(\sqrt{2-\sqrt{2}})^2-2}{\sqrt{2-\sqrt{2}}}\\
      &=-\sqrt{2+\sqrt{2}}
      \end{align*}
      $$
     
     $f$ is then an element of order 4. Therefore, $\text{Aut}_{\mathbb{Q}}(\mathbb{Q}(\sqrt{2+\sqrt{2}}))$ must be cyclic. $\square$
     
- Show that $\mathbb{Q}\subset \mathbb{Q}(\sqrt{3+\sqrt{5}})$ is a Galois extension and its Galois group is isomorphic to $(\mathbb{Z}/2\mathbb{Z})^2$.
  
  <em>Proof: </em>  $\sqrt{3+\sqrt{5}}$ is the root to the following separable polynomial:

  $$x^4-6x^2+4=(x-\sqrt{3+\sqrt{5}})(x+\sqrt{3+\sqrt{5}})(x-\sqrt{3-\sqrt{5}})(x+\sqrt{3-\sqrt{5}})$$

  The product of any two factors of the four factors above is not in $\mathbb{Q}[x]$, which means that $x^4-6x^2+4$ is irreducible. Notice that $\sqrt{3-\sqrt{5}}\in \mathbb{Q}(\sqrt{3+\sqrt{5}})$ because

  $$
   \begin{align*}
   \sqrt{3-\sqrt{5}}&=\frac{2}{\sqrt{3+\sqrt{5}}}
   \end{align*}
  $$

  It follows that $\mathbb{Q}(\sqrt{2+\sqrt{2}})$ is the splitting field of the separable irreducible polynomial $x^4-6x^2+4$ and thus a Galois extension. $\left\lvert\text{Aut}\_{\mathbb{Q}}(\mathbb{Q}(\sqrt{3+\sqrt{5}}))\right\lvert=4$. Suppose $\text{Aut}_{\mathbb{Q}}(\mathbb{Q}(\sqrt{3+\sqrt{5}}))$ is cyclic, then it has three subgroups. The Galois correspondence then says that there are three intermediate subfields of $\mathbb{Q}\subset \mathbb{Q}(\sqrt{3+\sqrt{5}})$. However, there are at least 4 intermediate fields: $\mathbb{Q}$, $\mathbb{Q}(\sqrt{5})$, $\mathbb{Q}(\sqrt{10})$ ($\sqrt{10}=\sqrt{3+\sqrt{5}}+\sqrt{3-\sqrt{5}}\in \mathbb{Q}(\sqrt{3+\sqrt{5}})$), $\mathbb{Q}(\sqrt{3+\sqrt{5}})$.

  We conclude that

  $$\text{Aut}_{\mathbb{Q}}(\mathbb{Q}(\sqrt{3+\sqrt{5}}))\cong (\mathbb{Z}/2\mathbb{Z})^2$$

  $\square$

- Show that $\mathbb{Q}\subset \mathbb{Q}(\sqrt{1+\sqrt{2}})$ is not Galois. Compute its Galois closure $\mathbb{Q}\subset F$ and $ \text{Aut}_{\mathbb{Q}}(F)$.

  <em>Proof: </em> Consider the following separable polynomial:

  $$x^4-2x^2-1=(x-\sqrt{1+\sqrt{2}})(x+\sqrt{1+\sqrt{2}})(x-\sqrt{1-\sqrt{2}})(x+\sqrt{1-\sqrt{2}})$$

  Clearly $\sqrt{1+\sqrt{2}}$ is a root of this polynomial. The product of any two factors of the four factors above is not in $\mathbb{Q}[x]$, which means that it is irreducible. $\sqrt{1-\sqrt{2}}=i\sqrt{-1+\sqrt{2}}=\cfrac{i}{1+\sqrt{2}}$. Hence, the splitting field of $x^4-2x^2-1$ is $\mathbb{Q}(i,\sqrt{2+\sqrt{2}})$, which is also the Galois closure of $\mathbb{Q}(\sqrt{1+\sqrt{2}})$ (we proved in the exercise above that the Galois closure of a simple extension is the splitting field of the minimal polynomial). This also shows why $\mathbb{Q}\subset \mathbb{Q}(\sqrt{1+\sqrt{2}})$ is not normal ($x^4-2x^2-1$ has a root in this extension but does not split) and thus not Galois.

  The degree of extension of $F=\mathbb{Q}(i,\sqrt{2+\sqrt{2}})$ is 8, which means that $\text{Aut}\_{\mathbb{Q}}(F)$ has 8 elements. The symmetry group of a square $D_8$ is a Sylow 2-subgroup of $S_4$, and by the second Sylow theorem, the only order 8 subgroup of $S_4$ up to an isomorphism is $D_8$ (the isomorphism is given by conjugatation). Since $\text{Aut}_{\mathbb{Q}}(F)\subset S_4$, $\text{Aut}\_{\mathbb{Q}}(F)\cong D_8$.

$\square$

<br>

<strong>Problem 3.</strong> VII.6.7. (Algebra: Chapter 0) Let $p>0$ be prime, and let $d\lvert e$ be positive integers, so that there is an extension $\mathbb{F}\_{p^d}\subset \mathbb{F}\_{p^e}$. Prove that $\text{Aut}\_{\mathbb{F}\_{p^d}}(\mathbb{F}\_{p^e})$ is cyclic, and describe a generator of this group.

<em>Proof: </em>It is proved in Proposition 5.8 that $\text{Aut}\_{\mathbb{F}\_{p}}(\mathbb{F}\_{p^e})$ is a cyclic group of order $e$. Every subgroup of $\text{Aut}\_{\mathbb{F}\_{p}}(\mathbb{F}\_{p^e})$ is also cyclic, and is generated by $\phi^d$, where $\phi$ is Frobenius automorphism and $d$ is a divisor of $n$. The fixed field of $\phi^d$ is exactly $\mathbb{F}_{p^d}$ (because it is the splitting field of $x^{p^d}-x$). The Galois correspondence then suggests that 

$$\text{Aut}_{\mathbb{F}\_{p^d}}(\mathbb{F}_{p^e})=\text{Cyclic subgroup generated by }\phi^d$$ 

$\square$

<br>

Problem 4.  What is the size of the group $\mathrm{GL}_3(\mathbb{F}_2)$ of $3\times 3$ invertible matrices over $\mathbb{F}_2$?  Does there exist a set of size $21$ on which $\mathrm{GL}_3(\mathbb{F}_2)$ acts transitively?

<em>Proof: </em> Here's a general formula for the size of $\mathrm{GL}\_n(\mathbb{F}\_{p})$:

$$\Pi_{i=0}^{n-1}(p^n-p^i)$$

Calculate:

$$(2^3-1)(2^3-2)(2^3-2^2)=7\times 6\times 4=168=2^3\times 21$$

Notice that the group $H\subset \mathrm{GL}_3(\mathbb{F}_2)$ of upper triangular matrices with all ones on the diagonal contains $2^3=8$ elements. Let $Q=\mathrm{GL}_3(\mathbb{F}_2)/H$ be the collection of left cosets of $H$. $Q$ has 21 elements and left multiplication of $\mathrm{GL}_3(\mathbb{F}_2)$ on $Q$ is transitive. $\square$

<br>

Problem 5. Is it possible to localize a commutative ring $R$ that is not an integral domain and get an integral domain?

<em>Proof: </em> This is possible. For example, consider $S=\{1,3\}$. We claim that

$$S^{-1}\mathbb{Z}/6\mathbb{Z}\cong \mathbb{Z}/2\mathbb{Z}$$

Here are the all possible fractions:

$$
\begin{align*}
\frac{0}{1},\frac{1}{1},\frac{2}{1},\frac{3}{1},\frac{4}{1},\frac{5}{1}\\
\frac{0}{3},\frac{1}{3},\frac{2}{3},\frac{3}{3},\frac{4}{3},\frac{5}{3}
\end{align*}
$$

Notice that fractions with even numerator are equivalent to zero (because $2\times 3\equiv 4\times 3 \equiv 0 \text{ (mod } 6)$). Similarly, one can show that fractions with odd numerator are equivalent to one. $\square$

<br>

Problem 6. Let $n\geq 1$, and suppose $A:\mathbb{C}^n\to \mathbb{C}^n$ is an idempotent linear operator.  ({\em Idempotent} means that $A^2 = A$.)  What are the possibilities for the characteristic polynomial of $A$? 

<em>Proof: </em> Suppose $\lambda$ is an eigenvalue and $v$ is its corresponding eigenvector. Then

$$\lambda v=Av=A^2v=\lambda^2v\Rightarrow \lambda-\lambda^2=0$$

Therefore, $\lambda$ is either equal to $1$ or 0 and the characteristic polynomial takes the following form:

$$x^r(x-1)^{n-r}$$

for some $0\leq r\leq n$. $\square$

<br>

Problem 7. Let $k$ be a field. Prove that if all irreducible polynomials in $k[x]$ are separable, then $k$ is perfect.

<em>Proof: </em> We prove by contrapositive. Suppose $k$ is not perfect. Then char is nonzero and the Frobenius homomorphism is not surjective. We pick $u\in k$ that does not belong to the image $i$ of the Frobenius homomorphism. We claim that $x^p-u$ is an inseparable irreducible polynomial. It is not separable because in $\bar{k}$, if $v$ is a root to this polynomial, then $x^p-u=x^p-v^p=(x-v)^p$, which implies that $v$ is the only root with multiplicity $p$. $x^p-u$ is irreducible because if we have a nontrivial monic factor, it must be in the form $(x-v)^n=x^n-v^n$ for some $0<n<p$. Consequently, $v^n\in k$. $n$ and $p$ are relatively prime, so for some integer $a,b$ we have $na+pb=1$. Hence, 

$$v=v^{na+pb}=(v^{n})^au^b\in k$$

which is a contradiction. $\square$


