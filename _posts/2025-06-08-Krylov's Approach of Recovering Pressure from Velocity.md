## Krylov's Approach of Recovering Pressure from Velocity

The mathematician Nicolai Vladimirovich Krylov wrote a book *Lectures on Elliptic and Parabolic Equations in Sobolev Space* and this article is meant to give a complete solution to the three exercises at the end of Section 9, Chapter 1 of this book.

Let me first give some motivations. Let $u(x)$ be the velocity of some incompressible fluid at the point $x\in \mathbb{R}^d$. We also assume $d\geq 3$. It is well-known that the pressure $p(x)$ satisfies the following PDE

$$-\Delta p= \partial_{ij}(u_iu_j),$$

(we use $u_i$ to denote the $i^{th}$ component of $u$ and the Einstein notation) and can be recovered from $u$ by using the following singular integral formula:

$$
\begin{align*}
p(x)&=-\frac{\delta_{i j}}{d} u_i(x) u_j(x)+ \text{p.v.}\int_{\mathbb{R}^d} K_{i j}(y) u_i(x-y) u_j(x-y) dy\\
&=-\frac{\delta_{i j}}{d} u_i(x) u_j(x)+\lim_{r\downarrow 0} \int_{|y|\geq r} K_{ij}(y) u_i(x-y) u_j(x-y) dy \hspace{2mm}(1),
\end{align*}
$$

where $\alpha_d$ is the volume of the unit ball in $\mathbb{R}^d$ and

$$
K_{i j}(y)=\frac{dy_iy_j-\delta_{ij}|y|^2}{d\alpha_d|y|^{d+2}}.
$$

Krylov does not mention fluid mechanics in Section 9, Chapter 1, but he talks about how to derive the formula above and to prove an estimate for $p$. More specifically, we can use his method to show that if $u\in C_0^2$ (we use 0 in subscript to mean that $u$ is compactly supported), then

$$
\begin{align*}
p(x)=&\Big(\int_{\mathbb{R}^d}\frac{y_i}{d\alpha_d|y|^d}\partial_j\zeta(y)dy\Big)u_i(x)u_j(x)\\
&+\lim_{r\downarrow 0} \int_{|y|\geq r} K_{ij}(y)u_i(x-y)u_j(x-y)dy,
\end{align*}
$$

where $\zeta\in C_0^\infty$ is a radially symmetric function such that $\zeta(0)=1$. Hence, to obtain Formula (1), we just need to solve the following exercise.

<strong>Exercise 1</strong> : 

$$N_{ij}:=\int_{\mathbb{R}^d}\frac{y_i}{d\alpha_d|y|^d}\partial_j\zeta(y)dy=-\frac{\delta_{ij}}{d}.$$

<em>Proof</em> :
Define a function $g:[0,\infty)\rightarrow \mathbb{R}$ by using the following formula:

$$g(r)=\zeta((r,0,\cdots, 0)).$$

Clearly $g\in C_0^\infty$, $\zeta(x)=g(|x|)$, and we have

$$
\begin{align*}
N_{ij}&=\int_{\mathbb{R}^d}\frac{y_i}{d\alpha_d|y|^d}\partial_j\zeta(y)dy\\
&=\int_{\mathbb{R}^d}\frac{y_iy_j}{d\alpha_d|y|^d}g'(|y|)dy.
\end{align*}
$$

From this formula, we can see that $N_{ii}$ is independent of $i$. Therefore, we have
$$
\begin{align*}
dN_{ii}=\sum_{i=1}^dN_{ii}&=\sum_{i=1}^d\int_{\mathbb{R}^d}\frac{y_i}{d\alpha_d|y|^d}\partial_i\zeta(y)dy.
\end{align*}
$$
Krylov also shows in this section that 
$$
\int_{\mathbb{R}^d}\frac{y_i}{d\alpha_d|y|^d}\partial_i\zeta(y)dy=\partial_{ii}v(0).
$$
where $v$ satisfies $-\Delta v=\zeta$. We then can deduce that
$$
\begin{align*}
dN_{ii}&=\Delta v(0)=-\zeta(0)=-1,\\
N_{ii}&=-\frac{1}{d}.
\end{align*}
$$
If $i\ne j$, we can use a change of variable $y_i\rightarrow -y_i$ to see that $N_{ij}=-N_{ij}$, which implies that $N_{ij}=0$. $\square$

Now we want to obtain an estimate of the $L^q$ norm of $p$ in terms of the the $L^{2q}$ norm of $u$ (at least for some $q\in (1,\infty)$). The theory of singular integral operators (see Grafakos' *Classical Fourier Analysis*) implies that for each pair $(i,j)$ and every $q\in (1,\infty)$,

$$
\begin{align*}
\|\lim_{r\downarrow 0} \int_{|y|\geq r} K(y)f(x-y)dy|\|_{L^q}&\lesssim \|u_iu_j\|_{L^q}\leq \|u\|_{L^{2q}}^2.
\end{align*}
$$

Here's a rough outline of the proof that is applicable for any reasonably nice functions (e.g. $C_0^\infty$) $K$ and $f\in L^q\cap C_0^\infty$. We first prove this inequality for $q=2$. It is easy to see that we have the following pointwise convergence:

$$
\begin{align*}
&\lim_{r\downarrow 0} \int_{|y|\geq r} K(y)f(x-y)dy\\&=\lim_{r\downarrow 0} \int_{r\leq |y|\leq \frac{1}{r}} K(y)f(x-y)dy
\end{align*}
$$

as $K(y)f(x-y)$ is integrable.
By Fatou's Lemma and Plancherel theorem, we have

$$
\begin{align*}
&\|\lim_{r\downarrow 0} \int_{|y|\geq r} K(y)f(x-y)dy\|_{L^2}\\&\leq \lim_{r\downarrow 0} \|\int_{r\leq |y|\leq \frac{1}{r}} K(y)f(x-y)dy\|_{L^2}\\
&=\lim_{r\downarrow 0} \|\mathcal{F}(K\chi_{\{r\leq |y|\leq \frac{1}{r}\}})\mathcal{F}(f)\|_{L^2}\\
&\leq \sup_{r>0}\|\mathcal{F}(K\chi_{\{r\leq |y|\leq \frac{1}{r}\}})\|_{L^\infty}\|f\|_{L^2}.
\end{align*}
$$

As a result, we will obtain the desired $L^2$ boundedness if we have a uniform estimate of $\|\mathcal{F}(K\chi_{\{r\leq |y|\leq \frac{1}{r}\}})\|_{L^\infty}$, which we omit the details. Once we have the $L^2$ boundedness, we can prove a weak type (1,1) estimate by using the Calderón–Zygmund Decomposition. We can then finally obtain $L^q$ boundedness for all $q\in (1,\infty)$ by using the Marcinkiewicz Interpolation Theorem.

In the case that $K=K_{ij}$ and $i\ne j$, we don't need to use Fatou's Lemma because we have the $L^2$ convergence.

<strong>Exercise 2</strong> : Let $u\in C_0^\infty$ and $f=-\Delta u$. Show that $K_{ij}\chi_{r<\lvert y\rvert<\frac{1}{r}}*f$ converges to $\partial_{ij} u$ in the $L^2$ sense.

<em>Proof</em> : Since $i\ne j$, $K_{ij}$ is antisymmetric in $y^i$, $K_{ij}\zeta$ has vanishing integral over any compact annulus, which implies the following pointwise convergence:

$$
\begin{align*}
\partial_{ij} u(x)&=\lim_{r\downarrow 0} \int_{|y|\geq r} K_{ij}(y)f(x-y)dy\\
&=\lim_{r\downarrow 0} \int_{r\leq |y|\leq \frac{1}{r}} K_{ij}(y)f(x-y)dy\\
&=\lim_{r\downarrow 0} \int_{r\leq |y|\leq \frac{1}{r}} K_{ij}(y)(f(x-y)-f(x)\zeta(y))dy\\
\end{align*}
$$

If we can find a dominating function of

$$\Big|\int_{r\leq \lvert|y|\leq \frac{1}{r}} K_{ij}(y)(f(x-y)-f(x)\zeta(y))dy\Big|^2,$$

then we can apply DCT to obtain the $L^2$ convergence. 

Let $R>0$ be large enough so that $\zeta(x)=f(x)=0$ for any $\lvert x\rvert>R$. We consider two cases.

Case 1: Suppose $\lvert x\rvert\leq R+1$. For any $\lvert y\rvert >R+\lvert x\rvert$, we have

$$
\begin{align*}
|x-y|&\geq |y|-|x|>R.
\end{align*}
$$

Hence, $f(x-y)-f(x)\zeta(y)=0$ for any $|y|>R+|x|$. We can then use the mean value inequality to prove that for all $r$ that is small enough,
$$
\begin{align*}
&\Big|\int_{r\leq |y|\leq \frac{1}{r}} K_{ij}(y)(f(x-y)-f(x)\zeta(y))dy\Big|\\
&\leq \int_{r\leq |y|\leq R+|x|} |K_{ij}(y)||f(x-y)-f(x)+f(x)(1-\zeta(y))|dy\\
&\lesssim \int_{|y|\leq R+|x|}\frac{(\|\nabla f\|_{L^\infty}+\|f\|_{L^\infty}\|\nabla \zeta\|_{L^\infty})|y|}{|y|^d}dy\\
&\lesssim\int_{|y|\leq R+|x|}\frac{1}{|y|^{d-1}}dy\\
&\lesssim R+|x|\\
&\leq 2R+1.
\end{align*}
$$

Case 2: Suppose $\lvert x\rvert>R+1$. In this case, $f(x)=0$, and for any $\lvert y\rvert<\lvert x\rvert-R$, we have

$$
\begin{align*}
|x-y|&\geq |x|-|y|>R.
\end{align*}
$$
Hence, $f(x-y)=0$ for any $\lvert y\rvert<\lvert x\rvert-R$. For all $r$ that is small enough, we have

$$
\begin{align*}
&\Big|\int_{r\leq |y|\leq \frac{1}{r}} K_{ij}(y)f(x-y)dy\Big|\\
&\lesssim \int_{|x|-R\leq |y|} \frac{|f(x-y)|}{|y|^d}dy\\
&\leq \frac{1}{(|x|-R)^d}\int_{|x|-R\leq |y|} |f(x-y)|dy\\
&\leq \frac{\|f\|_{L^1}|x|^d}{(|x|-R)^d}\frac{1}{|x|^d}\\
&\lesssim \frac{1}{|x|^d}.
\end{align*}
$$
We have the last inequality because $\lvert x\rvert/(\lvert x\rvert -R)$ is a a bounded function over the region $|x|>R+1$. 

Clearly, the function $g$ defined by $g(x)=2R+1$ for $\lvert x\rvert\leq R+1$ and $g(x)=\lvert x\rvert^{-d}$ for $\lvert x\rvert>R+1$ is in $L^2$, so $g(x)^2$ is a suitable domaining function of $K_{ij}\chi_{r<\lvert y\rvert<\frac{1}{r}}*f$. $\square$

Here's another way of deriving the $L^2$ estimate for the singular integral operators defined by the kernel $K_{ij}$. The general idea of this approach can be summarized by one word: pertubation. We first consider $\lambda-\Delta$ and prove an estimate for this operator, where $\lambda>0$ , and then obtain an estimate for $-\Delta$ by taking $\lambda\rightarrow 0$. 

<strong>Lemma</strong> : For all $u\in C^\infty\cap W^{2,2}=C^\infty\cap H^2$,
$$
\begin{align*}
\lambda^2\|u\|^2_{L^2}+2\lambda\sum_{i}\|\partial_iu\|_{L^2}^2+\sum_{i,j}\|\partial_{ij}u\|_{L^2}^2&=\|\lambda u-\Delta u\|^2_{L^2}\\
\|\partial_{ij}u\|_{L^2}&\leq \|\lambda u-\Delta u\|_{L^2}\\
&\leq \lambda \|u\|_{L^2}+\|\Delta u\|_{L^2}
\end{align*}
$$

<em>Proof</em> : Use Fourier transform. See Lemma 1 in Krylov's book. $\square$

We are now ready to solve Exercise 3. 

<strong>Exercise 3</strong> : Let $f\in C_0^\infty$. Define $u$ by

$$u(x)=\int_{\mathbb{R}^d}\frac{1}{d(d-2)\alpha_d|y|^{d-2}}f(x-y)dy.$$

Show that $u\in C^\infty\cap H^2$ and 

$$\|\partial_{ij}u\|_{L^2}\leq \|\Delta u\|_{L^2}.$$

Conclude that the singular integral operator defind by $K_{ij}$ is bounded from $L^2$ to $L^2$.

<em>Proof</em> : $u\in C^\infty$ because $f\in C^\infty$ and one can commute $\partial_i$ with $\int$. Moreover, we can apply Young's convolution inequality to deduce that

$$
\begin{align*}
\partial_i u(x)&=-\int_{\mathbb{R}^d}\frac{y_i}{d\alpha_d|y|^d}f(x-y)dy\\
\|\partial_i u(x)\|_{L^2}&\lesssim \|\frac{y_i}{|y|^d}\chi_{|y|\leq R}\|_{L^1}\|f\|_{L^2}<\infty
\end{align*}
$$

where $R>0$ is a large enough number so that the support of $f$ is contained in the  We can similarly prove an estimate for second-order derivatives. Therefoere, $u\in H^2$, which allows us to use Lemma 1 to derive the following inequality:

$$
\begin{align*}
\forall \lambda>0, \|\partial_{ij}u\|_{L^2}&\leq \lambda \|u\|_{L^2}+\|\Delta u\|_{L^2},\\
\|\partial_{ij}u\|_{L^2}&\leq \|\Delta u\|_{L^2},\\
\|\lim_{r\downarrow 0} \int_{|y|\geq r} K_{ij}(y)f(x-y)dy\|_{L^2}&\leq \|f\|_{L^2}.
\end{align*}
$$

$\square$
