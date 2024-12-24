## Solutions to the Practice Final and Final Exams for MATH2510: Algebra, Fall 2024, Brown University

This class has been quite enjoyable, as we have explored some interesting problems in algebra. In this post, I will present solutions to the Practice Final and Final exams.

<strong>Practice Final: </strong>

1. VII.6.4. (Algebra: Chapter 0) Let $k\subset E$ be a finite separable extension. Prove that $E$ may be identified with an intermediate field of a Galois extension $k\subset F$ of $k$. In fact, prove that there is a smallest such extension $k\subset F$, in the sense that if $k\subset E\subset K$, with $k\subset K$ Galois, then there exists an embedding of $F$ in $K$ which is the identity on $E$. (The extension $k\subset F$ is the Galois closure of the extension $k\subset E$.)

<em>Proof: </em> Since every finite separable extension is simple, $E=k(\alpha)$. Let $g$ be the minimal polynomial of $\alpha$. $g$ is separable. Let $k\subset F$ be the splitting field of $g$. $k\subset F$ is then a Galois extension, and $E$ is clearly an intermediate field of $F$.

We claim that $F$ is also the Galois closure. Suppose $k\subset E\subset K$ for some Galois extension $k\subset K$. $k\subset K$ is the a normal extension. Since $g$ has a root in $E\subset K$, $g$ splits in $K$. $K$ thus contains the splitting field $F$. $\square$

2. VII.6.6. (Algebra: Chapter 0)
   - Show that $\mathbb{Q}\subset \mathbb{Q}(\sqrt{2+\sqrt{2}})$ is a Galois extension and its Galois group is cyclic.
    <em>Proof: </em> $\sqrt{2+\sqrt{2}}$ is the root to the following polynomial:
            \[x^4-4x^2+2=(x-\sqrt{2+\sqrt{2}})(x+\sqrt{2+\sqrt{2}})(x-\sqrt{2-\sqrt{2}})(x+\sqrt{2-\sqrt{2}})\]
            which is clearly separable. It is irreducible in $\mathbb{Z}$ by Eisenstein's criterion and thus also irreducible in $\mathbb{Q}$. Notice that $\sqrt{2-\sqrt{2}}\in \mathbb{Q}(\sqrt{2+\sqrt{2}})$ because
            \begin{align*}
                \sqrt{2-\sqrt{2}}&=\frac{\sqrt{2}}{\sqrt{2+\sqrt{2}}}=\frac{(\sqrt{2+\sqrt{2}})^2-2}{\sqrt{2+\sqrt{2}}}
            \end{align*}
            It follows that $\mathbb{Q}(\sqrt{2+\sqrt{2}})$ is the splitting field of the separable irreducible polynomial $x^4-4x^2+2$ and thus a Galois extension. Both the degree of extension and $|\text{Aut}_{\mathbb{Q}}(\mathbb{Q}(\sqrt{2+\sqrt{2}}))|$ are equal to $4$. Recall that every root of $x^4-4x^2+2$ corresponds to an automorphism in $\text{Aut}_{\mathbb{Q}}(\mathbb{Q}(\sqrt{2+\sqrt{2}}))$. Let $f\in \text{Aut}_{\mathbb{Q}}(\mathbb{Q}(\sqrt{2+\sqrt{2}}))$ be the automorphism that corresponds to $\sqrt{2-\sqrt{2}}$ (i.e. $f(\sqrt{2+\sqrt{2}})=\sqrt{2-\sqrt{2}}$). Then,
            \begin{align*}
                f(f(\sqrt{2+\sqrt{2}}))&=f(\sqrt{2-\sqrt{2}})\\
                &=f(\frac{(\sqrt{2+\sqrt{2}})^2-2}{\sqrt{2+\sqrt{2}}})\\
                &=\frac{f(\sqrt{2+\sqrt{2}})^2-2}{f(\sqrt{2+\sqrt{2}})}\\
                &=\frac{(\sqrt{2-\sqrt{2}})^2-2}{\sqrt{2-\sqrt{2}}}\\
                &=-\sqrt{2+\sqrt{2}}
            \end{align*}
            $f$ is then an element of order 4. Therefore, $\text{Aut}_{\mathbb{Q}}(\mathbb{Q}(\sqrt{2+\sqrt{2}}))$ must be cyclic. $\square$
   - Show that $\mathbb{Q}\subset \mathbb{Q}(\sqrt{3+\sqrt{5}})$ is a Galois extension and its Galois group is isomorphic to $(\mathbb{Z}/2\mathbb{Z})^2$.
     <em>Proof: </em>  $\sqrt{3+\sqrt{5}}$ is the root to the following separable polynomial:
            \[x^4-6x^2+4=(x-\sqrt{3+\sqrt{5}})(x+\sqrt{3+\sqrt{5}})(x-\sqrt{3-\sqrt{5}})(x+\sqrt{3-\sqrt{5}})\]
            The product of any two factors of the four factors above is not in $\bb{Q}[x]$, which means that $x^4-6x^2+4$ is irreducible. Notice that $\sqrt{3-\sqrt{5}}\in \bb{Q}(\sqrt{3+\sqrt{5}})$ because
            \begin{align*}
                \sqrt{3-\sqrt{5}}&=\frac{2}{\sqrt{3+\sqrt{5}}}
            \end{align*}
            It follows that $\bb{Q}(\sqrt{2+\sqrt{2}})$ is the splitting field of the separable irreducible polynomial $x^4-6x^2+4$ and thus a Galois extension. $|\text{Aut}_{\bb{Q}}(\bb{Q}(\sqrt{3+\sqrt{5}}))|=4$. Suppose $\text{Aut}_{\bb{Q}}(\bb{Q}(\sqrt{3+\sqrt{5}}))$ is cyclic, then it has three subgroups. The Galois correspondence then says that there are three intermediate fields of $\bb{Q}\subset \bb{Q}(\sqrt{3+\sqrt{5}})$. However, there are at least 4 intermediate fields: $\bb{Q}$, $\bb{Q}(\sqrt{5})$, $\bb{Q}(\sqrt{10})$ ($\sqrt{10}=\sqrt{3+\sqrt{5}}+\sqrt{3-\sqrt{5}}\in \bb{Q}(\sqrt{3+\sqrt{5}})$), $\bb{Q}(\sqrt{3+\sqrt{5}})$. $\square$
            We conclude that 
            \[\text{Aut}_{\bb{Q}}(\bb{Q}(\sqrt{3+\sqrt{5}}))\cong (\bb{Z}/2\bb{Z})^2\] 
   - 
4. 
