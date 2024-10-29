## Application of Wirtinger Derivatives to Harmonic Functions

This article is inspired by Exercise 1 in Chapter 1 of Krantz's Several Complex Variables. We first recall the definition of Wirtinger derivatives:

$$
\begin{align*}
    \frac{\partial}{\partial z}&=\frac{1}{2}(\frac{\partial}{\partial x}-i\frac{\partial }{\partial y})\\
    \frac{\partial}{\partial \bar{z}}&=\frac{1}{2}(\frac{\partial}{\partial x}+i\frac{\partial }{\partial y})
\end{align*}
$$

They are useful for and closely related to harmonic functions because of the following well-known identity:

$$
\begin{align*}
\Delta=4\frac{\partial^2}{\partial z\partial \bar{z}}
\end{align*}
$$

Using this identity and chain rules of Wirtinger derivatives, we can prove some interesting theorems about (complex) harmonic functions (and at the same time we can see that harmonicity is a very nice property). Let's start with the following question. Let $f:\Omega\subset\mathbb{C}\rightarrow \mathbb{C}$ be a nonvanishing complex-valued harmonic function. Suppose $1/f$ is also harmonic. Prove that $f$ is either holomorphic or anti-holomorphic. In particular, if $f$ is real-valued, then $f$ must be constant.

*Proof.* We will use the calculus of Wirtinger derivative:

$$\begin{align*}
        \frac{\partial}{\partial \bar{z}}\frac{\partial f}{\partial z}&=0\text{ (because $f$ is harmonic)}\\
        \frac{\partial}{\partial \bar{z}}\frac{\partial (1/f)}{\partial z}&=0\text{ (because $1/f$ is harmonic)}\\
        \frac{\partial}{\partial \bar{z}}[(-\frac{1}{f^2})\frac{\partial f}{\partial z}]&=0\text{ (Chain Rule)}\\
        \frac{\partial (-1/f^2)}{\partial \bar{z}}\frac{\partial f}{\partial z}-\frac{1}{f^2}\frac{\partial}{\partial \bar{z}}\frac{\partial f}{\partial z}&=0\text{ (Product Rule)}\\
        \frac{\partial (-1/f^2)}{\partial \bar{z}}\frac{\partial f}{\partial z}&=0\\
        \frac{2}{f^3}\frac{\partial f}{\partial \bar{z}}\frac{\partial f}{\partial z}&=0\\
        \frac{\partial f}{\partial \bar{z}}\frac{\partial f}{\partial z}&=0
    \end{align*}$$
    
This is the product of two complex-valued harmonic functions, so one of them must be identically equal to $0$. $\frac{\partial f}{\partial z}\equiv 0$ implies that $f$ is anti-holomorphic and $\frac{\partial f}{\partial \bar{z}}\equiv 0$ implies that $f$ is holomorphic. $\square$

Here are some similar questions. Let $f:\Omega\subset\mathbb{C}\rightarrow \mathbb{C}$ be a complex-valued harmonic function. Suppose $f^2$ is also harmonic. Prove that $f$ is either holomorphic or anti-holomorphic. In particular, if $f$ is real-valued, then $f$ must be constant.

*Proof.* We repeat the calculations:

$$\begin{align*}
        \frac{\partial}{\partial\bar{z}}\frac{\partial (f^2)}{\partial z}&=0\\
        \frac{\partial}{\partial\bar{z}}[2f\frac{\partial f}{\partial z}]&=0\\
        2\frac{\partial f}{\partial\bar{z}}\frac{\partial f}{\partial z}+2f\frac{\partial}{\partial\bar{z}}\frac{\partial f}{\partial z}&=0\\
        \frac{\partial f}{\partial\bar{z}}\frac{\partial f}{\partial z}&=0
    \end{align*}$$
    
We obtain the same conclusion. $\square$
    
Let $f:\Omega\subset\mathbb{C}\rightarrow \mathbb{C}-[0,\infty)$ be a complex-valued harmonic function. Suppose $\log f$ is also harmonic. Prove that $f$ is either holomorphic or anti-holomorphic. In particular, if $f$ is real-valued, then $f$ must be constant.

*Proof.* 

$$\begin{align*}
        \frac{\partial}{\partial\bar{z}}\frac{\partial (\log f)}{\partial z}&=0\\
        \frac{\partial}{\partial\bar{z}}[\frac{1}{f}\frac{\partial f}{\partial z}]&=0\\
        \frac{\partial (1/f)}{\partial\bar{z}}\frac{\partial f}{\partial z}+\frac{1}{f}\frac{\partial}{\partial\bar{z}}\frac{\partial f}{\partial z}&=0\\
        (-\frac{1}{f^2})\frac{\partial f}{\partial\bar{z}}\frac{\partial f}{\partial z}&=0\\
        \frac{\partial f}{\partial\bar{z}}\frac{\partial f}{\partial z}&=0
    \end{align*}$$
    
which completes the proof. $\square$

Notice that the above arguments can be generalized to complex valued harmonic functions defined on $\mathbb{C}^n$.
