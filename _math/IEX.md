---
title: "Matrices"
collection: teaching
type: "Undergraduate course"
permalink: /math/matrices
---
Example of d3.js and pts.js in markdown...




A linear map $f(x)$ is one that has the property that $f(\alpha_1 x_1 + \alpha_2 x_2) = \alpha_1f(x_1) + \alpha_2 f(x_2)$.   Intuitively, one can think of linear function as one you can apply to each little bit of the argument separately and then add them all up and get the right answer.   Matrices give us concise representations of these maps given particular bases for the domain and co-domain of $f(\cdot)$.    

Suppose $y=f(x)$ and bases for the domain and co-domain of $f(\cdot)$ are represented by the columns of a matrix $V$ and the columns of a matrix $W$ respectively.   If we have coordinate vectors $\alpha$ and $\beta$ for $x$ and $y$ (respectively) in their appropriate bases, i.e. $x = V \alpha$ and $y = W\beta$, then we can write down a matrix $A$ that represents the action of $f(\cdot)$ in that it transforms one set of coordinates into the other, i.e. $y = f(x)$ can be represented by $\beta = A \alpha$.  With a little thought one can see that the $k$th column of $A$ should be the coordinates of $f(V_{:k})$ with respect to the basis $W$ (where we use the notation $V_{:k}$ to represent the $k$th column of $V$.)  


This simple definition of linear operators induces a lot of interesting structure.  Intuitively, this structure can be thought of as doing two things: elements in the vector space are stretched or shrunk and information is transfered between coordinates of the vectors.  In other words, each linear operator stretches vectors and rotates them.  Any matrix $A$ can be decomposed into a symmetric piece and a skew symmetric piece $A = S+K$ where $S = \frac{1}{2}(A+A^T)$ is the average between a matrix and it's transpose and $K = \frac{1}{2}(A-A^T)$ is the difference between a matrix and it's transpose.  The symmetric piece purely stretches a vector (with respect to some coordinate system).  The skew symmetric piece purely transfers information from any vector to the subspace orthogonal to that vector since $x^TKx = 0$ for any $x$. This is very similar to a complex number $z$'s decomposition into a real and imaginary part $z = a+bi$ with the symmetric piece corresponding to the real part and the skew symmetric piece corresponding to the imaginary piece.  The transpose operation is akin to the conjugate operation for complex numbers, it leaves the symmetric part untouched and negates the skew symmetric part.  Matrices can also be decomposed into subsequent stretching and rotation in the form of a polar decomposition $A = ZR$ or $A = RZ$ where $R$ is a rotation matrix This is akin to the phasor representation of a complex number $z = e^{i\theta} = e^{i\theta}z$.  Since matrices don't necessarily commute the order of $R$ and $Z$ makes a difference.  From the singul   
