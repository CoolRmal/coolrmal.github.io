## What does a Category with One Morphism between Each Pair of Objects Look like?

Recall that for any two categories $\mathcal{C}$ and $\mathcal{D}$, they are naturally equivalent if and only if their skeletons are isomorphic. That is, $\mathcal{C}$ and $\mathcal{D}$ are equivalent if and only if they are the same after modding isomorphic objects.

Now suppose $\mathcal{C}$ is a category such that for any two objects $A,B$ in $\mathcal{C}$, there exists exactly one morphism $f\in \text{Mor}(A,B)$. Then geometrically, we can represent this category in the following way (suppose in addition that $\mathcal{C}$ has 4 objects):

<div align="center">
<img width="715" alt="Screenshot 2025-01-03 at 2 07 13 AM" src="https://github.com/user-attachments/assets/5195c302-1738-409e-969d-bce3a85d84a9" />
</div>


Since there are only one morphism between each object, every morphism is an isomorphism (the composition of the morphism in $\text{Mor}(A,B)$ and the morphism in $\text{Mor}(B,A)$ is necessarily equal to the identity morphism). It is then clear from the graph that we are only left with one object after we mod out isomorphic objects. Therefore, $\mathcal{C}$ is equivalent to the category $1$ with a single object and a single morphism. 

This argument definitely also works for not only 4 but also every natural numbers. In fact, as long as $\mathcal{C}$ has at least one object, then it is equivalent to $1$. It is possible for $\mathcal{C}$ to have no objects; in this case, $\mathcal{C}$ is the empty category, which trivially satisfies the property that there exists exactly one morphism between any two objects. 

Can we concretely construct $\mathcal{C}$ instead of drawing graphs? The answer is Yes. Let $X$ be a set. We can define a category $f(X)$ as follows:

- The objects set of $f(X)$ is $X$.
- item The morphisms set is $X\times X$.
- An ordered pair $(x,y)\in X\times X$ is a morphism from $x$ to $y$.
- The composition of $(x,y)$ and $(y,z)$ is $(x,z)$

$f(X)$ is then a category with exactly one morphism between each pair of objects. Also, $f(\emptyset)$ is the empty category.
