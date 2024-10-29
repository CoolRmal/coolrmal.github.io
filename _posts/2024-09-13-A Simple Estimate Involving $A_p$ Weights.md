## A Simple Estimate Involving $A_p$ Weights

This is an exercise given by Professor Sergei Treil during the analysis seminar. Let $f: \mathbb{R}\rightarrow \mathbb{C}$ be a measurable function. Given a bounded interval $I\subset \mathbb{R}$, we can define an operator $E_I$ as follows:

$$E_If=(\frac{1}{|I|}\int_Ifdx)\chi_I$$

whenever the integral of $f$ (over $I$) is well-defined. I am asked to estimate

$$\|E_I\|_{L^p(w)\rightarrow L^p(w)}$$

where $w$ is an $A_p$ weight (a nonnegative locally integrable function that is positive a.e.) on $\mathbb{R}$ for $1< p< \infty$ and $L^p(w)$ is its corresponding weighted $L^p$ space on $\mathbb{R}$. Let $q$ be the conjugate of $p$ (that is, $\frac{1}{p}+\frac{1}{q}=1$). First, notice that $E_I$ is well-defined on $L^p(w)$ because

$$
\begin{align*}
    |\frac{1}{|I|}\int_I fdx|&\leq \frac{1}{|I|}\int_I|f|dx\\
    &=\frac{1}{|I|}\int_I|f|w^{\frac{1}{p}}w^{-\frac{1}{p}}dx\\
    &\leq (\frac{1}{|I|}\int_I w^{-\frac{q}{p}}dx)^{\frac{1}{q}}(\frac{1}{|I|}\int_I|f|^pwdx)^{\frac{1}{p}}\text{ (Hölder's Inequality)}\\
    &=\Bigg[\frac{(\frac{1}{|I|}\int_I wdx)(\frac{1}{|I|}\int_I w^{-\frac{1}{p-1}}dx)^{p-1}}{\frac{1}{|I|}\int_I wdx}\Bigg]^{\frac{1}{p}}(\frac{1}{|I|}\int_I|f|^pwdx)^{\frac{1}{p}}\\
    &\leq \Bigg[\frac{[w]_{A_p}}{\frac{1}{|I|}\int_I wdx}\Bigg]^{\frac{1}{p}}\frac{1}{|I|^{\frac{1}{p}}}\|f\|_{L^p(w)}\\
    &=\Bigg[\frac{[w]_{A_p}}{\int_I wdx}\Bigg]^{\frac{1}{p}}\|f\|_{L^p(w)}\\
    &<\infty
\end{align*}
$$

where we have the last inequality exactly because $w\in A_p$ and $f\in L^p(w)$. Now we try to bound the $L^p(w)$ norm of $E_If$:

$$
\begin{align*}
    \|E_If\|_{L^p(w)}^p&=\int_{\mathbb{R}}|E_If|^pwdx\\
    &\leq \int_I(\frac{1}{|I|}\int_I|f|dx)^pwdx\\
    &\leq \int_I\Bigg[\frac{[w]_{A_p}}{\int_I wdx}\Bigg]\|f\|_{L^p(w)}^pwdx\text{ (by the above estimate)}\\
    &=[w]_{A_p}\|f\|_{L^p(w)}^p\\
    \|E_If\|_{L^p(w)}&\leq [w]_{A_p}^{\frac{1}{p}}\|f\|_{L^p(w)}
\end{align*}
$$

Hence, 

$$\|E_I\|_{L^p(w)\rightarrow L^p(w)}\leq [w]_{A_p}^{\frac{1}{p}}.$$

I remember that Professor Treil told me that there is a way to show that this is indeed an equality, but I didn't figure it out. It would be great if someone can share your thought with me on this problem.
