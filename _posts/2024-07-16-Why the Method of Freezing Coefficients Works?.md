# Why the Method of Freezing Coefficients Works?

Partial differential operators with constant coefficients are always easier to handle. But what if the coefficients are not constant? If we assume the coefficients are sufficiently smooth/regular, one approach is to "freeze" the coefficients—approximate them as constants—and then estimate the resulting error. This method works because smooth functions locally (within a sufficiently small ball) approximate constants very well.

Once we obtain local estimates, how do we extend them to global estimates? This is achieved using the partition of unity: we divide the domain into smaller regions, perform the estimates on each part separately, and then combine the local estimates to derive a global one.

An example of this is Gårding's inequality. 

<strong>Gårding's inequality</strong>: Assume that $A^{\alpha\beta}\_{ij}$ are uniformly continuous on $\Omega$ and that they satisfy the Legendre-Hadamard condition for some $\lambda>0$ independent of $x\in \Omega$. Then the bilinear form
on $W_1^2(\Omega,\mathbb{R}^m)$ defined by 

$$B(u,v):=\int_{\Omega}A_{ij}^{\alpha\beta}D_\alpha u^iD_\beta v^jdx$$

is weakly coercive.

In the case of constant coefficients, we can prove this inequality by using Fourier transforms (in this case we can actually show that the bilinear form is coercive). To extend this to the general case, we use the "freezing coefficients" technique and a partition of unity. Of course, the partition of unity gives rise to some error terms, which is why this theorem only guarantees that the corresponding bilinear form is weakly coercive.






