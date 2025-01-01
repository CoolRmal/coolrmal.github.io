# Why you sometimes need physics for PDE?

I realized I truly lack a "physics mindset." This realization came from considering the following problem in the PDE class where I was a TA:

<strong>Show that the equation of one-dimensional diffusion in a liquid that is moving along the $x$ axis to the right at constant speed $V$ is 

$$u_t=ku_{xx}-Vu_x$$

where $u(x,t)$ represents the concentration of the liquid. </strong>

My most straightforward approach to solving this would have been to consider two factors that influence the concentration: diffusion $\phi(x,t)$ and advection $\psi(x,t)$. According to Fick's law, the amount of material flowing through a unit area per unit time is proportional to the gradient of the concentration, i.e.,

$$\phi(x,t)=-ku_x$$

Advection refers to the movement of material caused by the flow of the liquid itself, so

$$\psi(x,t)=Vu$$

which can also be derived via dimensional analysis.

Next, consider two points $x_0$ and $x_1$ that are very close together. Let $A$ represent the cross-sectional area, $V$ the volume between $x_0$ and $x_1$, and $m$ the total mass of the material in this interval. Note that $u\approx m/V$. The change in mass within this interval equals the mass entering from the left minus the mass leaving from the right. Therefore,

$$
\begin{align*}
    \frac{dm}{dt}&=\phi(x_0,t)A+\psi(x_0,t)A-\phi(x_1,t)A-\psi(x_1,t)A\\
    \frac{d}{dt}(\frac{m}{A})&=(\phi(x_0,t)-\phi(x_1,t))+(\psi(x_0,t)-\psi(x_1,t))\\
    \frac{d}{dt}\int_{x_0}^{x_1}\frac{m}{V}ds&=-\int_{x_0}^{x_1}\phi_x(s,t)ds-\int_{x_0}^{x_1}\psi_x(s,t)ds\\
   \int_{x_0}^{x_1}u_t ds&=\int_{x_0}^{x_1}(ku_{xx}-Vu_x)ds\\
   u_t&=ku_{xx}-Vu_x
\end{align*}
$$

However, this solution feels cumbersome and lacks elegance. A more mature physicist would think about the problem like this. We know that if the liquid is stationary, $u$ satisfies the equation

$$u_t=ku_{xx}$$

Given this, we define a new coordinate system: $y=x-Vt$. Note that an object moving at a constant speed $V$ to the right will appear stationary in this new coordinate system! Thus, the function $v(y,t)=u(y+Vt,t)$ should satisfy

$$v_t=kv_{xx}$$

Using the chain rule:

$$
\begin{align*}
v_t&=Vu_x+u_t\\
    v_y&=u_y\\
    v_{yy}&=u_{xx}
\end{align*}
$$

Substituting into the earlier equation gives:

$$
\begin{align*}
    Vu_x+u_t&=ku_{xx}
\end{align*}
$$

This matches the result obtained by the first method!

Moreover, we can then easily solve the following initial value problem:

$$
\begin{align*}
\begin{cases}
    u_t-ku_{xx}+Vu_x&=0\text{ on }\mathbb{R}\times (0,\infty)\\
    u(x,0)&=\phi(x)
\end{cases}
\end{align*}
$$

This is because $v$ can be expressed using a convolution:

$$
\begin{align*}
    v(y,t)&=\frac{1}{\sqrt{4\pi kt}}\int_{\mathbb{R}}e^{-\frac{(y-x)^2}{4kt}}v(x,0)dx\\
    &=\frac{1}{\sqrt{4\pi kt}}\int_{\mathbb{R}}e^{-\frac{(y-x)^2}{4kt}}u(x,0)dx\\
    &=\frac{1}{\sqrt{4\pi kt}}\int_{\mathbb{R}}e^{-\frac{(y-x)^2}{4kt}}\phi(x)dx\\
    u(x,t)&=v(x-Vt,t)=\frac{1}{\sqrt{4\pi kt}}\int_{\mathbb{R}}e^{-\frac{(x-Vt-s)^2}{4kt}}\phi(s)ds
\end{align*}
$$

This is brilliant! Clearly I don’t deeply understand the concept of reference frames and fail to apply it effectively. From this perspective, physics is indeed fascinating—after all, it can help solve PDEs :)








