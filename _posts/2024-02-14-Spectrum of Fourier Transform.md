# Spectrum of Fourier Transform

Let's begin with some notations.

$$
\begin{aligned}
\mathcal{F}(f)(\xi) & =\int_{\mathbb{R}^n} f(x) e^{-2 \pi i x \dot{\xi}} d x \\
\mathcal{F}^{-1}(f)(\xi) & =\int_{\mathbb{R}^n} f(x) e^{2 \pi i x \dot{\xi}} d x \\
\mathcal{V}(f)(x) & =f(-x)
\end{aligned}
$$

Here $f$ is a Schwartz function (or $L^1$ function). It is then easy to see that

$$\mathcal{F}^{-1}(f)=\mathcal{F}(\mathcal{V}(f))=\mathcal{V}(\mathcal{F}(f))$$

We then can deduce that applying the Fourier transform 4 times is the same as identity:

$$
\begin{aligned}
\mathcal{F}(\mathcal{F}(\mathcal{F}(\mathcal{F}(f)))) & =\mathcal{F}(\mathcal{F}(\mathcal{V}(\mathcal{V}(\mathcal{F}(\mathcal{F}(f)))))) \\
& =\mathcal{F}\left(\mathcal{F}^{-1}\left(\mathcal{F}^{-1}(\mathcal{F}(f))\right)\right) \\
& =f
\end{aligned}
$$

Therefore, if $\lambda$ is an eigenvalue (i.e. a nonzero complex number such that there exists a nonzero function $f$ satisfying the following equality $\mathcal{F}(f)=\lambda f$), then

$$f=\mathcal{F}(\mathcal{F}(\mathcal{F}(\mathcal{F}(f))))=\lambda^4 f$$

$\lambda$ is thus a fourth root of unity. Indeed all fourth roots of unity are eigenvalues by some boring calculations:

$$
\begin{aligned}
\mathcal{F}\left(e^{-\pi x^2}\right) & =e^{-\pi x^2} \\
\mathcal{F}\left(\left(a x-\frac{4 \pi a x^3}{3}\right) e^{-\pi x^2}\right) & =i\left(a x-\frac{4 \pi a x^3}{3}\right) e^{-\pi x^2} \\
\mathcal{F}\left(\left(a-4 \pi a x^2\right) e^{-\pi x^2}\right) & =-\left(a-4 \pi a x^2\right) e^{-\pi x^2} \\
\mathcal{F}\left(x e^{-\pi x^2}\right) & =-i x e^{-\pi x^2}
\end{aligned}
$$

where $a$ is an arbitrary complex number. Right now we have only shown that the point spectrum of $\mathcal{F}$ consists of the fourth roots of unity. What about the spectrum of $\mathcal{F}$? That is, does there exists a complex number $\lambda$ that is not a fourth root of unity such that $\lambda I-\mathcal{F}$ is not invertible? The answer is no because of the following observation:

$$
\begin{gathered}
\forall \lambda \neq 1, i,-1,-i, (\lambda I-\mathcal{F})\left(\frac{1}{\lambda^4-1}\left(\mathcal{F}^3+\lambda \mathcal{F}^2+\lambda^2 \mathcal{F}+\lambda^3 I\right)\right)=I
\end{gathered}
$$

Notice that $\frac{1}{\lambda^4-1}\left(\mathcal{F}^3+\lambda \mathcal{F}^2+\lambda^2 \mathcal{F}+\lambda^3 I\right)$ is a bounded operator.












