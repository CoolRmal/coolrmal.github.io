## A Conversation about the Heat Equation in My TA Session

Student: Can I discuss the last question of the midterm exam with you?

Me: Sure, I can listen to your approach of solving it.

Student: Let's consider the heat equation defined $\mathbb{R}_+\times [0,1]$:

$$
\begin{align*}
\begin{cases}
u_t-u_{xx}=0 &\text{in }\mathbb{R}_+\times(0,1)\\
u(0,x)=u_0(x) & x\in [0,1]\\
u_x(t,0)=u_x(t,1)=0 & t\in \mathbb{R}_+
\end{cases}
\end{align*}
$$

We define $\mathcal{H}(t)=\int_0^1u(t,x)dx$, which is the energy at time $t$。First, we need to prove that the energy is conserved, meaning that $\mathcal{H}(t)$ is equal to some constant $H$.

Me: This shouldn't be too difficult for you. For such kind of physics problems, you can exchange the order of differentiation and integration and use the given boundary conditions to find: 

$$\begin{align*}
    \frac{d}{dt}\mathcal{H}(t)&=\frac{d}{dt}\int_0^1u(t,x)dx\\
    &=\int_0^1u_t(t,x)dx\\
    &=\int_0^1u_{xx}(t,x)dx\\
    &=u_x(t,1)-u_x(t,0)\\
    &=0
\end{align*}$$

Then you will see that the derivative of the energy with respect to time is zero, so the energy is equal to some constant $H$.

Student: Yes I agree with you. Next we want to prove that $u(x,t)$ converges to $H$ in the $L^2$-sense as $t\rightarrow\infty$. Following the hint, we should first prove that

$$E'(t)= -\int_0^1(v_x(t,x))^2dx$$

Me: I guess you still apply the trick of exchanging the order of differentiation and integration.

Student: That's correct. After exchanging we get

$$
\begin{align*}
    E'(t)&=\frac{1}{2}\int_0^1\frac{\partial}{\partial t}(v^2(t,x))dx\\
    &=\int_0^1v(t,x)v_t(t,x)dx\\
    &=\int_0^1v(t,x)v_{xx}(t,x)dx
\end{align*}
$$

We need to integrate by part: 

$$
\begin{align*}
    E'(t)&=vv_x|_0^1-\int_0^1(v_x(t,x))^2dx\\
    &=-\int_0^1(v_x(t,x))^2dx
\end{align*}
$$



















