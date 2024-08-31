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

By the definition of $v$, we can know that

$$
\int_0^1v(t,x)dx=\int_0^1u(t,x)dx-H=\mathcal{H}(t)-H=0
$$

The problem then asks me to prove that $\forall t\geq 0$, $\exists x_0\in [0,1]$ such that $v(t,x_0)=0$.

Me: Well how do you prove that?

Student: I used the Mean Value Theorem. Define $F(s)=\int_0^sv(t,x)dx$. Since $F(1)=F(0)=0$，the Mean Value Theorem tells us that $\exists x_0$ such that

$$
\begin{align*}
    F'(x_0)&=\frac{F(1)-F(0)}{1-0}=0\\
    v(t,x_0)&=0
\end{align*}
$$

Me: I totally agree with you.

Student: Then we are asked to use the Cauchy-Schwarz inequality to prove that 

$$
E(t)\leq \frac{1}{2}\int_0^1(v_x(t,x))^2dx
$$

I don't have time to solve this problem during the exam, but I do have a solution right now (Calculating on the blackboard).

$$
\begin{align*}
    (v(t,x))^2&=(v(t,x)-v(t,x_0))^2\\
    &=(\int_x^{x_0}v_x(t,x)dx)^2\\
    &\leq (\int_0^{1}v_x(t,x)dx)^2\\
    &\leq \int_0^1(v_x(t,x))^2dx\text{ (Cauchy Schwarz})\\
    E(t)&=\frac{1}{2}\int_0^1(v(t,x)-v(t,x_0))^2dx\\
    &\leq \frac{1}{2}\int_0^1(\int_0^1(v_x(t,x))^2dx)dx\\
    &=\frac{1}{2}\int_0^1(v_x(t,x))^2dx
\end{align*}
$$

Me: Nice calculations. Let's review what we know about the function $E$ right now:

$$
\begin{align}
    E'(t)&= -\int_0^1(v_x(t,x))^2dx\\
    E(t)&\leq \frac{1}{2}\int_0^1(v_x(t,x))^2dx
\end{align}
$$

Therefore, $E$ is a nonnegative decreasing function, so it has a limit at infinity.

Student: I believe that the limit of $E'(t)$ at infinity is $0$, so by $(1)$ we have

$$\lim_{t\rightarrow\infty}\int_0^1(v_x(t,x))^2dx=0$$

We then can apply the squeeze theorem to $(2)$ to see that the limit of $E(t)$ at infinity is 0.

Me: I don't think your argument is correct. A nonnegative decreasing function does not need to have vanishing derivative at infinity. Consider the following example. Let's $h$ be a bump function supported in $[0,1]$. $h$ satisfies

$$
\begin{align*}
    h(x)\begin{cases}
        >0, &x\in (0,1)\\
        =0, &\text{otherwise}
    \end{cases}
\end{align*}
$$

Furthermore, $h(1/2)=1$. Define the following two functions: 

$$
\begin{align*}
    g(x)&=\sum_{n=1}^\infty h(n^2(x-n))\chi_{[n,n+1]}\\
    f(x)&=(\sum_{n=1}^\infty\frac{1}{n^2}\int_0^1h(t)dt)-\int_0^xg(x)dx
\end{align*}
$$

Any finite interval $[a,b]$ can be covered by finitely many intervals of the form $[n,n+1]$, so $g$ is locally the sum of finitely many smooth functions，which implies that both $g$ and $f$ are smooth. $f'=-g\leq 0$, so $f$ is decreasing。$f\geq 0$ because 

$$
\begin{align*}
    \int_0^xg(x)dx&\leq \int_0^mg(x)dx\text{ ($m$ is an integer larger than $x$)}\\
    &=\int_0^m\sum_{n=1}^\infty h(n^2(x-n))\chi_{[n,n+1]}dx\\
    &=\int_0^m\sum_{n=1}^{m-1} h(n^2(x-n))\chi_{[n,n+1]}dx\\
    &\leq \sum_{n=1}^{m-1}\int_{n}^{\frac{1}{n^2}+n}h(n^2(x-n))dx\\
    &\leq \sum_{n=1}^{m-1}\frac{1}{n^2}\int_0^1h(u)du\text{ (substitution $u=n^2(x-n)$)}\\
    &\leq \sum_{n=1}^{\infty}\frac{1}{n^2}\int_0^1h(u)du<\infty
\end{align*}
$$

Consider the following two sequences:$\{n+\frac{1}{n^2}\}, \{n+\frac{1}{2n^2}\}$.

$$
\begin{align*}
    g(n+\frac{1}{n^2})&=h(n^2\frac{1}{n^2})=h(1)=0\\
    g(n+\frac{1}{2n^2})&=h(n^2\frac{1}{2n^2})=h(\frac{1}{2})=1
\end{align*}
$$

We can see that $g$ is oscillating, so $f'=-g$ does not have a limit at infinity. Let's reflect on the construction of this counterexample. Intuitively, we might expect a non-negative decreasing function to look something like this: 

<div align="center">
	<img width="594" src="https://github.com/user-attachments/assets/12e70065-5ffb-4841-9d8d-a7702933b4e9">
</div>

We may believe that in order for the function to remain non-negative and approach its limit at infinity, the rate of change of the function at infinity cannot be too large. However, we can actually have a function that changes very little for most of the time and changes a lot at some points, resulting in an overall small rate of change:

<div align="center">
	<img width="594" src="https://github.com/user-attachments/assets/4132223b-307c-4457-8d8c-b6bbedc187e3">
</div>

The red arrows in the above picture points at the moments that the function has a large rate of change. This helps us understand the construction of the above counterexample: it is simply the antiderivative of a non-negative function that oscillates at infinity.

Now let's make a digression. The example above suggests that the existence of $\lim_{x\rightarrow \infty}f(x)$ does not guarantee that $\lim_{x\rightarrow \infty}f’(x)=0$ because $\lim_{x\rightarrow \infty}f’(x)$ may not even exist. However, what if we know that $\lim_{x\rightarrow \infty}f’(x)$ exists? In this case, do we have the equality $\lim_{x\rightarrow \infty}f’(x)=0$? The answer is Yes, and in fact we only need a weak assumption: the existence of $\lim_{x\rightarrow \infty}f(x)+f’(x)$.

<strong>Theorem (Hardy): If both $\lim_{x\rightarrow \infty}f(x)$ and $\lim_{x\rightarrow \infty}f(x)+f’(x)$ exists, then $\lim_{x\rightarrow \infty}f’(x)=0$.</strong> 

<em>Proof: </em> We elegantly apply L'Hôpital's rule:

$$
\begin{align*}
        \lim_{x\rightarrow \infty}f(x)&=\lim_{x\rightarrow \infty}\frac{e^xf(x)}{e^x}\\
        &=\lim_{x\rightarrow \infty}\frac{e^xf(x)+e^xf'(x)}{e^x}\text{ (L'Hôpital's rule)}\\
        &=\lim_{x\rightarrow \infty}f(x)+f’(x)
    \end{align*}
$$

from which we easily deduce that $\lim_{x\rightarrow \infty}f’(x)=0$. $\square$

Let's go back to the original problem，which is to prove that $\lim_{t\rightarrow\infty}E(t)=0$. 

Student: Here's another argument. Suppose $\lim_{t\rightarrow\infty}E(t)=c>0$. Then there exists a large enough real number $M$ such that $\forall t>M$,

$$
\begin{align*}
    |E(t)-c|&<\frac{c}{2}\\
    \frac{c}{2}&<E(t)\leq \frac{1}{2}\int_0^1(v_x(t,x))^2dx\text{ (by $(2)$)}\\
    c&\leq \int_0^1(v_x(t,x))^2dx\\
    -c&\geq -\int_0^1(v_x(t,x))^2dx=E'(t)
    \end{align*}
$$

Let $T$ be a real number larger than $M$. We have

$$
\begin{align*}
    |E(T+1)-E(T)|&=|\int_T^{T+1}E'(t)dt|\\
    &= -\int_T^{T+1}E'(t)dt\\
    &\geq c
\end{align*}
$$

Apply the triangle inequality to get

$$
\begin{align*}
    c&\leq |E(T+1)-E(T)|\\
    &\leq |E(T+1)-c|+|E(T)-c|
\end{align*}
$$

Either $|E(T+1)-c|\geq c/2$ or $|E(T)-c|\geq c/2$. In both cases, we obtain a contradiction.


<strong>Reference: </strong>
1. https://math.stackexchange.com/questions/42277/proving-that-lim-limits-x-to-inftyfx-0-when-lim-limits-x-to-inftyf?noredirect=1&lq=1
2. https://math.stackexchange.com/questions/788813/the-limit-of-the-derivative-of-an-increasing-and-bounded-function-is-always-0/788818#788818









