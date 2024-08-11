"use client";
import React from 'react';
import styles from './zkbasis.module.css';
import SideIcons from '@/components/SideIcons';
import BackToTop from '@/components/BackToTop';






export default function DaoBasics() {
  return (
    <div className={styles.articleContainer}>

      <section className={styles.section}>
        <h2>ZK 101</h2>
        <p>Privacy is <b>cool again</b>, but it comes with its own set of puzzles to solve. The buzz around zero-knowledge proofs (ZKPs) is proof (pun intended) that these cryptographic marvels have serious potential. But what exactly are ZKPs, and why should we care? To get our minds around this, we need to take a little detour into the world of number theory and cryptography. <br></br><br></br>

        We'll kick things off by wrapping our heads around some number theory basics—think of it as the secret sauce that makes cryptography tick. We’ll explore concepts like groups, modular arithmetic, and the Chinese remainder theorem (which is as cool as it sounds). After that, we'll dive into cryptographic primitives. This math-y appetizer will set us up nicely to tackle the main course: the core principles of zero-knowledge proofs (which are not going to be address in this article).</p>
      
        <img src="/images/aim.svg" alt="Aims" className={styles.benefitsImage} />

        <p><strong>REALLY IMPORTANT:</strong> we strongly recommend you to learn the basics of polynomials --which are not going to be covered in this article. A good video to start with is embedded below:</p>
        <div className={styles.videoContainer}>
  <div className={styles.videoWrapper}>
    <iframe
      src="https://www.youtube.com/embed/YdXcRY9A9HI"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>
        
        </section>

      <section className={styles.section}>
        <h1>Number Theory</h1>
        <p>Understanding the principles of number theory is relevant for anyone interested in cryptography. It provides the mathematical foundation that underpins much of modern cryptographic practice. Concepts such as group theory and modular arithmetic form the building blocks for more advanced topics. By exploring these ideas, we can better appreciate how they contribute to the security and efficiency of cryptographic algorithms, and ultimately, to the implementation of ZKPs.
        </p>
        <h3>Groups and Group Theory</h3>
        <p>A group is the ultimate math playground. Let's think that you have a bunch of objects (that’s your set), and a way to mix and match them (that’s your operation). The cool part? No matter how you combine these objects, they always stay within the playground—no one sneaks out! There's also a "do nothing" element (called the identity element) that just hangs out and doesn’t change anything when you combine it with other objects. And just like in a well-structured playground, there’s always a way to "undo" any action (that’s the inverse element), making sure things can go back to how they were. 
        <br></br><br></br>
        <img src="/images/groups.svg" alt="Aims" className={styles.benefitsImage} /> 
        <br></br><br></br>
        </p>   
        <h3>Definition:</h3>
    <p>A group is a set <code>G</code> paired with a binary operation (think of it as a way to combine any two elements) that satisfies four axioms:</p>

    <ol className={styles.list}>
        <li>
            <strong>Closure:</strong> If you take any two members <code>a</code> and <code>b</code> from our group <code>G</code> and combine them using our operation (let’s call it <code>*</code>), the result will always be another member of the group. In other words, no one leaves the club! 
            <br />
            <code>a * b ∈ G</code> for all <code>a</code>, <code>b</code> in <code>G</code>
        </li>
        <li>
            <strong>Associativity:</strong> This is the group’s way of saying, “It doesn’t matter how we group things when we combine them!” If you’re combining three elements <code>a</code>, <code>b</code>, and <code>c</code>, you can first combine <code>a</code> and <code>b</code>, then combine the result with <code>c</code>, or combine <code>b</code> and <code>c</code> first, then combine with <code>a</code>. The final result will be the same.
            <br />
            <code>(a * b) * c = a * (b * c)</code> for all <code>a</code>, <code>b</code>, <code>c</code> in <code>G</code>
        </li>
        <li>
            <strong>Identity Element:</strong> There’s a special member in the group (let’s call it <code>e</code>) that acts like a "do nothing" element. When you combine <code>e</code> with any other member <code>a</code> in the group, it leaves <code>a</code> exactly as it was. It’s the group’s way of keeping things unchanged when needed.
            <br />
            <code>e * a = a * e = a</code> for all <code>a</code> in <code>G</code>
        </li>
        <li>
            <strong>Inverse Element:</strong> For every member <code>a</code> in the group, there’s another member <code>b</code> in the group that can undo <code>a</code>’s effect. When you combine <code>a</code> and <code>b</code> (or <code>b</code> and <code>a</code>), you get back to our "do nothing" element <code>e</code>. This is like having a built-in undo button!
            <br />
            <code>a * b = b * a = e</code> where <code>b</code> is the inverse of <code>a</code>
        </li>
    </ol>
    <h3>Example: The Additive Group <code>Z<sub>N</sub></code></h3>
    <p>Let’s jump into a concrete example to see a group in action! Meet the <strong>additive group</strong> <code>Z<sub>N</sub></code>, which is about adding numbers together. This group consists of integers from <code>0</code> to <code>N-1</code> and uses addition as its operation. But here’s the twist—it’s all done <strong>modulo</strong> <code>N</code>. The identity element here is <code>0</code> (because adding 0 doesn’t change anything), and for any number <code>x</code>, its inverse is <code>N - x</code>, which brings the sum back to 0 under modulo <code>N</code>.</p>
</section>

<section className={styles.section}>
    <h3>Abelian (Commutative) Groups</h3>
    <p>Next up, we’ve got <strong>abelian groups</strong>—the chill, go-with-the-flow type of groups. In these groups, the order of combining elements doesn’t matter. This means <code>a * b</code> is the same as <code>b * a</code> for any elements <code>a</code> and <code>b</code> in the group. This property is super handy in cryptography because it simplifies many operations. You can think of abelian groups as the math equivalent of “no fuss, no muss.”</p>
</section>

<section className={styles.section}>
    <h3>Cyclic Groups</h3>
    <p>Formally, a group <code>G</code> is called cyclic if there exists an element <code>g</code> in <code>G</code> such that every element <code>h</code> in <code>G</code> can be written as <code>h = g^k</code> for some integer <code>k</code>. The element <code>g</code> is the generator of the group, and we often denote the group as <code>⟨g⟩</code>.</p>
    <h3>Discrete Logarithms</h3>
    <p>Given a cyclic group <code>G</code> with a generator <code>g</code> and an element <code>h</code> in <code>G</code>, the discrete logarithm of <code>h</code> to the base <code>g</code> is the integer <code>x</code> such that:</p>

    <p className={styles.quote}><code>h = g^x</code></p>
    <p>This is denoted as <code>x = log<sub>g</sub>(h)</code>.</p>

    <h4>Computational Complexity</h4>
    <p>Computing discrete logarithms isn’t just hard—it’s <em>cryptographically</em> hard, meaning it's tough enough to keep your secrets safe. This difficulty is the backbone of many secure communication protocols, like the Diffie-Hellman key exchange and digital signatures.</p>

    <h4>Example in <code>Z*<sub>N</sub></code></h4>
    <p>In the multiplicative group <code>Z*<sub>N</sub></code> (the set of integers less than <code>N</code> that are coprime to <code>N</code>), the discrete logarithm problem can be described like this: Given <code>g</code> and <code>h</code> in <code>Z*<sub>N</sub></code>, find the exponent <code>x</code> such that:</p>

    <p className={styles.quote}><code>g^x ≡ h (mod N)</code></p>
    <p>It’s a challenge that cryptographers love to solve, but thankfully for us, it’s a puzzle that takes a long time without the right tools.</p>


        </section>


        <section className={styles.section}>
        <h1>Modular Arithmetic</h1>
        <p>When we think about modular arithmetic, we shift our perspective from an infinite set of numbers to a finite set of the first <code>n</code> natural numbers. If any given integer falls outside this range, we 'wrap it around' to fit within these bounds. A helpful analogy is to think of it like a clock:</p>

        <img src="/images/modulo.svg" alt="Modulo" className={styles.benefitsImage2} style={{ display: 'block', margin: '0 auto' }} />
        
        <p>For example, in this clock we choose 6 first numbers. Now, let us see where the number 10 will land. We can think of it as a rope, the length of which is ten units:</p>
        <img src="/images/rope.svg" alt="Aims" className={styles.benefitsImage} /> 

        <p>If we attach the rope to the beggining of the circle, we will see that after one rotation we still have a portion of the rope left, if we continue, it will land in the number 4:</p>

        <img src="/images/modulo_5_from_10.svg" alt="Modulo" className={styles.benefitsImage2} style={{ display: 'block', margin: '0 auto' }} />

    <p>So, for a more formal definition, we would say that for integers <code>a</code> and <code>b</code>, and a positive integer <code>N</code> (our modulus), we say that <code>a</code> is <strong>congruent</strong> to <code>b</code> modulo <code>N</code>, written as:</p>

    <p className={styles.quote}><code>a ≡ b (mod N)</code></p>
    <p>if <code>N</code> divides the difference <code>a - b</code>. In other words, <code>a</code> and <code>b</code> leave the same remainder when divided by <code>N</code>.</p>

    <p>Basically, one number is congruent to another if they have the same reminder when you divide them with the same number.</p>
    <h4>Addition and Multiplication:</h4>
    <p>In modular arithmetic, addition, subtraction, and multiplication are performed as usual, but the result is then taken modulo <code>N</code>. Think of it as doing regular math, but whenever you hit the “modulus,” you start counting from zero again.</p>

    <p>For example:</p>

    <p className={styles.quote}><code>(a + b) (mod N)</code></p>
    <p className={styles.quote}><code>(a × b) (mod N)</code></p>

    <p>This “wrapping around” behavior is what makes modular arithmetic so useful in cryptography—it keeps everything neatly within a specific range, which is super handy for things like encrypting data.</p>

    <h3>Multiplicative Inverses</h3>
    <p>An essential concept in modular arithmetic is the <strong>multiplicative inverse</strong>. For a number <code>a</code> to have a multiplicative inverse modulo <code>N</code>, there must be a number <code>b</code> such that:</p>

    <p className={styles.quote}><code>a × b ≡ 1 (mod N)</code></p>

    <p>The number <code>b</code> is called the multiplicative inverse of <code>a</code> modulo <code>N</code>, and it exists if and only if <code>a</code> and <code>N</code> are coprime (i.e., their greatest common divisor is 1). This is like having a secret code that when combined with another number brings you back to the identity element (which is 1 in multiplication).</p>

    <h4>Example:</h4>
    <p>Consider the modulus <code>N = 7</code>. In this case, the integers <code>&#123;0, 1, 2, 3, 4, 5, 6&#125;</code> form a complete set of residues modulo 7. If we compute <code>3 + 5</code> modulo 7, we get:</p>
    <p className={styles.quote}><code>3 + 5 = 8</code></p>

    <p className={styles.quote}><code>8 ≡ 1 (mod 7)</code></p>

    <p>So,</p>

    <p className={styles.quote}><code>3 + 5 ≡ 1 (mod 7)</code></p>

    <p>This means that 3 and 5 are multiplicative inverses of each other modulo 7.</p>
</section>

<section className={styles.section}>
    <h3>Applications</h3>
    <p>Modular arithmetic is used in algorithms like RSA and Diffie-Hellman. It allows for operations on large numbers to be performed efficiently while keeping the results within a manageable range.</p>

    <p>One key operation is <strong>modular exponentiation</strong>, which involves raising a number to a power and then taking the result modulo <code>N</code>. This is fundamental in many cryptographic protocols because it ensures that calculations stay within a finite set of values, making the math both secure and efficient.</p>
</section>

<section className={styles.section}>
    <h3>Modular Exponentiation</h3>
    <p>Modular exponentiation might sound like a mouthful, but it’s a really neat trick. It refers to the process of computing <code>a^b (mod N)</code>. Essentially, you’re raising a number <code>a</code> to a power <code>b</code> and then taking the remainder when divided by <code>N</code>.</p>

    <p>Now, you might be thinking, "That sounds like it could involve a lot of math!" And you’d be right—if it weren’t for a nifty shortcut called <strong>repeated squaring</strong>. This method significantly reduces the number of operations required, making it much more efficient, especially when dealing with large numbers.</p>

    <p>In cryptography, where we often work with huge numbers, this efficiency is golden. Modular exponentiation is the backbone of many cryptographic algorithms, helping us keep data secure without needing a supercomputer for every calculation.</p>
    
        </section>

        <section className={styles.section}>
    <h3>Euclidean Algorithm and GCD</h3>
    <p>The <strong>Greatest Common Divisor (GCD)</strong> of two integers is like the ultimate peacemaker—it’s the largest positive integer that divides both numbers without leaving any remainder. The GCD is a cornerstone concept in number theory and pops up all over the place in cryptography.</p>

    <h4>Definition:</h4>
    <p>For any two integers <code>a</code> and <code>b</code>, the GCD of <code>a</code> and <code>b</code>, denoted as <code>gcd(a, b)</code>, is the largest integer <code>d</code> such that:</p>

    <p className={styles.quote}><code>d | a</code> and <code>d | b</code></p>

    <p>where <code>|</code> denotes divisibility. In simpler terms, <code>d</code> is the biggest number that can evenly divide both <code>a</code> and <code>b</code>.</p>
</section>

<section className={styles.section}>
    <h3>Euclidean Algorithm</h3>
    <p>The <strong>Euclidean Algorithm</strong> is a clever and efficient method for finding the GCD of two numbers. It’s based on the principle that the GCD of two numbers also divides their difference. Here’s how it works:</p>

    <ol className={styles.list}>
        <li>Given two integers <code>a</code> and <code>b</code>, where <code>a ≥ b</code>, divide <code>a</code> by <code>b</code> to get a quotient <code>q</code> and a remainder <code>r</code>:</li>

        <p className={styles.quote}><code>a = bq + r</code></p>

        <li>Replace <code>a</code> with <code>b</code> and <code>b</code> with <code>r</code>. Repeat this process until <code>r = 0</code>.</li>

        <li>The last non-zero remainder is the GCD of <code>a</code> and <code>b</code>.</li>
    </ol>

    <p>Mathematically, this process is expressed as:</p>

    <p className={styles.quote}><code>gcd(a, b) = gcd(b, r)</code></p>

    <p>and so on, until <code>r = 0</code>.</p>

    <h4>Example:</h4>
    <p>Let’s find the GCD of 252 and 105 using the Euclidean Algorithm:</p>

    <ol className={styles.list}>
        <li>Compute the remainder of 252 divided by 105:</li>
        <p className={styles.quote}><code>252 = 105 × 2 + 42</code></p>

        <li>Replace 252 with 105 and 105 with 42. Then compute the remainder:</li>
        <p className={styles.quote}><code>105 = 42 × 2 + 21</code></p>

        <li>Replace 105 with 42 and 42 with 21. Then compute the remainder:</li>
        <p className={styles.quote}><code>42 = 21 × 2 + 0</code></p>
    </ol>

    <p>Since the remainder is now 0, the last non-zero remainder is the GCD:</p>

    <p className={styles.quote}><code>gcd(252, 105) = 21</code></p>
</section>

<section className={styles.section}>
    <h3>Extended Euclidean Algorithm</h3>
    <p>The <strong>Extended Euclidean Algorithm</strong> is like the Euclidean Algorithm’s big sibling. Not only does it find the GCD of two numbers, but it also expresses the GCD as a linear combination of the two numbers:</p>

    <p className={styles.quote}><code>gcd(a, b) = ax + by</code></p>

    <p>where <code>x</code> and <code>y</code> are integers. This extra step is useful for finding multiplicative inverses in modular arithmetic.</p>
</section>

<section className={styles.section}>
    <h3>Applications</h3>
    <p>The Euclidean Algorithm and its extended are essential in algorithms like RSA (stay tuned, we’ll cover that soon!), where finding the multiplicative inverse is a crucial step. Mastering these algorithms is key to cracking many cryptographic processes.</p>

    <h3>Chinese Remainder Theorem</h3>
    <p>The <strong>Chinese Remainder Theorem (CRT)</strong> simplifies computations by breaking them down into smaller, more manageable parts. This is especially useful in cryptography, where you often need to juggle several modular equations at the same time.</p>

    <h4>Statement of the Theorem</h4>
    <p>The Chinese Remainder Theorem states that if you have a set of integers <code>n<sub>1</sub>, n<sub>2</sub>, &hellip;, n<sub>k</sub></code> that are pairwise coprime (meaning the greatest common divisor of any pair is 1), and any integers <code>a<sub>1</sub>, a<sub>2</sub>, &hellip;, a<sub>k</sub></code>, then there exists a unique integer <code>x</code> modulo <code>N</code>, where <code>N</code> is the product of the <code>n<sub>i</sub></code>'s, such that:</p>

    <p className={styles.quote}><code>x ≡ a<sub>1</sub> (mod n<sub>1</sub>)</code></p>
    <p className={styles.quote}><code>x ≡ a<sub>2</sub> (mod n<sub>2</sub>)</code></p>
    <p className={styles.quote}><code>\vdots</code></p>
    <p className={styles.quote}><code>x ≡ a<sub>k</sub> (mod n<sub>k</sub>)</code></p>

    <p>In other words, CRT guarantees there’s a unique solution modulo <code>N</code> for this system of congruences.</p>
<h4>Example</h4>
    <p>Consider the system of congruences:</p>

    <p className={styles.quote}><code>x ≡ 2 (mod 3)</code></p>
    <p className={styles.quote}><code>x ≡ 3 (mod 5)</code></p>
    <p className={styles.quote}><code>x ≡ 2 (mod 7)</code></p>

    <p>Follow these steps to find <code>x</code>:</p>

    <ol className={styles.list}>
        <li><strong>Compute <code>N</code></strong>:
            <p className={styles.quote}><code>N = 3 × 5 × 7 = 105</code></p>
        </li>
        <li><strong>Compute the partial products <code>N<sub>i</sub></code></strong>:
            <p className={styles.quote}><code>N<sub>1</sub> = \frac{105}{3} = 35</code></p>
            <p className={styles.quote}><code>N<sub>2</sub> = \frac{105}{5} = 21</code></p>
            <p className={styles.quote}><code>N<sub>3</sub> = \frac{105}{7} = 15</code></p>
        </li>
        <li><strong>Compute the multiplicative inverses <code>M<sub>i</sub></code></strong>:
            <ul className={styles.list}>
                <li><code>M<sub>1</sub></code> such that <code>35 × M<sub>1</sub> ≡ 1 (mod 3)</code>:
                <p className={styles.quote}>
    <code>35 ≡ 2 (mod 3) &nbsp;&nbsp; entonces &nbsp;&nbsp; 2 × M<sub>1</sub> ≡ 1 (mod 3) &nbsp;&nbsp; &#x2192; &nbsp;&nbsp; M<sub>1</sub> = 2</code>
</p>
                </li>
                <li><code>M<sub>2</sub></code> such that <code>21 × M<sub>2</sub> ≡ 1 (mod 5)</code>:
                    <p className={styles.quote}><code>21 ≡ 1 (mod 5) \quad \Rightarrow \quad M<sub>2</sub> = 1</code></p>
                </li>
                <li><code>M<sub>3</sub></code> such that <code>15 × M<sub>3</sub> ≡ 1 (mod 7)</code>:
                    <p className={styles.quote}><code>15 ≡ 1 (mod 7) \quad \Rightarrow \quad M<sub>3</sub> = 1</code></p>
                </li>
            </ul>
        </li>
        <li><strong>Construct the solution <code>x</code></strong>:
            <p className={styles.quote}><code>x ≡ 2 × 35 × 2 + 3 × 21 × 1 + 2 × 15 × 1 (mod 105)</code></p>
            <p className={styles.quote}><code>x ≡ 140 + 63 + 30 (mod 105)</code></p>
            <p className={styles.quote}><code>x ≡ 233 (mod 105)</code></p>
            <p className={styles.quote}><code>x ≡ 23 (mod 105)</code></p>
        </li>
    </ol>
    <p>So, the solution is <code>x ≡ 23 (mod 105)</code>.</p>
</section>
<section className={styles.section}>
    <h3>The Multiplicative Group <code>Z<sub>N</sub><sup>*</sup></code></h3>
    <p>The <strong>Multiplicative Group <code>Z<sub>N</sub><sup>*</sup></code></strong> is a set of all integers less than <code>N</code> that are relatively prime to <code>N</code> (meaning their greatest common divisor with <code>N</code> is 1), and the group operation is multiplication modulo <code>N</code>.</p>

    <h4>Definition:</h4>
    <p>Formally, the multiplicative group <code>Z<sub>N</sub><sup>*</sup></code> is defined as:</p>
    <p className={styles.quote}><code>Z<sub>N</sub><sup>*</sup> = {'{'}a ∈ {'{'}1, 2, ... , N-1{'}'} | gcd(a, N) = 1{'}'}</code></p>
    <p>where the operation is multiplication modulo <code>N</code>.</p>
</section>

<section className={styles.section}>
    <h4>Properties of <code>Z<sub>N</sub><sup>*</sup></code></h4>
    <p>Just like any other group, <code>Z<sub>N</sub><sup>*</sup></code> comes with a set of properties that make it a well-behaved mathematical playground:</p>
    <ul className={styles.list}>
        <li><strong>Closure:</strong> If <code>a, b ∈ Z<sub>N</sub><sup>*</sup></code>, then the product <code>ab</code> (mod <code>N</code>) is also in <code>Z<sub>N</sub><sup>*</sup></code>.</li>
        <li><strong>Associativity:</strong> The multiplication operation in <code>Z<sub>N</sub><sup>*</sup></code> is associative.</li>
        <li><strong>Identity:</strong> The element 1 serves as the identity element in <code>Z<sub>N</sub><sup>*</sup></code> because:
            <p className={styles.quote}><code>1 × a ≡ a × 1 ≡ a</code> (mod <code>N</code>)</p>
            for any <code>a ∈ Z<sub>N</sub><sup>*</sup></code>.
        </li>
        <li><strong>Inverses:</strong> For each <code>a ∈ Z<sub>N</sub><sup>*</sup></code>, there exists an element <code>b ∈ Z<sub>N</sub><sup>*</sup></code> such that:
            <p className={styles.quote}><code>a × b ≡ 1</code> (mod <code>N</code>)</p>
            This <code>b</code> is called the multiplicative inverse of <code>a</code> modulo <code>N</code>.
        </li>
    </ul>
</section>

<section className={styles.section}>
    <h4>Example:</h4>
    <p>Consider <code>N = 10</code>. The elements of <code>Z<sub>10</sub><sup>*</sup></code> are the integers less than 10 that are relatively prime to 10:</p>
    <p className={styles.quote}><code>Z<sub>10</sub><sup>*</sup> = {'{'}1, 3, 7, 9{'}'}</code></p>
    <p>The group operation is multiplication modulo 10. For example:</p>
    <p className={styles.quote}><code>3 × 7 ≡ 21 ≡ 1</code> (mod <code>10</code>)</p>
    <p>So, 3 and 7 are inverses of each other in <code>Z<sub>10</sub><sup>*</sup></code>.</p>
</section>

<section className={styles.section}>
    <h4>Euler's Totient Function</h4>
    <p>The order of <code>Z<sub>N</sub><sup>*</sup></code> (the number of elements in <code>Z<sub>N</sub><sup>*</sup></code>) is given by <strong>Euler's Totient Function</strong>, denoted as <code>φ(N)</code>. If <code>N</code> has the prime factorization:</p>
    <p className={styles.quote}><code>N = p<sub>1</sub><sup>k<sub>1</sub></sup> × p<sub>2</sub><sup>k<sub>2</sub></sup> × ... × p<sub>m</sub><sup>k<sub>m</sub></sup></code></p>
    <p>then:</p>
    <p className={styles.quote}><code>φ(N) = N (1 - 1/p<sub>1</sub>) (1 - 1/p<sub>2</sub>) ... (1 - 1/p<sub>m</sub>)</code></p>
</section>

<section className={styles.section}>
    <h3>Primes and Primality Testing</h3>
    <p>Prime numbers are the building blocks of number theory and play a crucial role in cryptography. A prime number is an integer greater than 1 that has no positive divisors other than 1 and itself.</p>

    <h4>Definition of a Prime Number</h4>
    <p>A prime number <code>p</code> is an integer greater than 1 such that the only divisors of <code>p</code> are 1 and <code>p</code> itself. Formally:</p>
    <p className={styles.quote}><code>p</code> is prime if <code>∀ d ∈ ℤ, d | p ⇒ d = 1</code> or <code>d = p</code></p>
</section>

<section className={styles.section}>
    <h4>Importance of Primes in Cryptography</h4>
    <p>Prime numbers are fundamental in cryptographic algorithms, especially in public-key cryptography like RSA, Diffie-Hellman key exchange, and elliptic curve cryptography. The security of these systems often depends on the difficulty of factoring large composite numbers or computing discrete logarithms, both of which are computationally hard problems when primes are involved.</p>
</section>

<section className={styles.section}>
    <h4>Primality Testing</h4>
    <p>Primality testing is the process of determining whether a given number <code>n</code> is prime. Several algorithms exist for primality testing, ranging from simple trial division to more complex probabilistic and deterministic methods.</p>

    <ol className={styles.list}>
        <li><strong>Trial Division</strong>:
            <p>The simplest method of primality testing involves dividing <code>n</code> by all integers up to <code>√n</code>. If none divide evenly, <code>n</code> is prime.</p>
            <p>This method is inefficient for large numbers because it requires a large number of divisions.</p>
        </li>

        <li><strong>Fermat's Little Theorem</strong>:
        <p>Fermat's Little Theorem states that if <code>p</code> is a prime and <code>a</code> is an integer such that <code>1 &le; a &lt; p</code>, then:</p>

            <p className={styles.quote}><code>a<sup>p-1</sup> ≡ 1 (mod p)</code></p>
            <p>This theorem is the basis for the Fermat primality test, which is a probabilistic test.</p>
        </li>

        <li><strong>Miller-Rabin Primality Test</strong>:
            <p>The Miller-Rabin test is a probabilistic algorithm that improves upon Fermat's test. It is based on the observation that for a prime <code>p</code>, certain congruences must hold. It repeatedly checks these conditions with different random bases to increase the confidence that a number is prime.</p>
            <p>While not deterministic, it can be made highly reliable by increasing the number of iterations.</p>
        </li>

        <li><strong>AKS Primality Test</strong>:
            <p>The AKS primality test is a deterministic algorithm that runs in polynomial time. It is based on the idea that a number <code>n</code> is prime if and only if:</p>
            <p className={styles.quote}><code>(x - a)<sup>n</sup> ≡ (x<sup>n</sup> - a) (mod n)</code></p>
            <p>This test is theoretically important, though less commonly used in practice due to its complexity and slower performance compared to probabilistic tests.</p>
        </li>
    </ol>
</section>

<section className={styles.section}>
    <h4>Example: Miller-Rabin Primality Test</h4>
    <p>The Miller-Rabin test checks whether a number <code>n</code> is prime by writing <code>n - 1</code> as <code>2<sup>s</sup> × d</code>, where <code>d</code> is odd. It then picks a random base <code>a</code> and checks if:</p>
    <p className={styles.quote}><code>a<sup>d</sup> ≡ 1 (mod n)</code></p>
    <p>or if for some <code>r</code> where <code>0 &le; r &lt; s</code>:</p>
    <p className={styles.quote}><code>a<sup>2<sup>r</sup> × d</sup> ≡ -1 (mod n)</code></p>
    <p>If neither condition is met, <code>n</code> is composite. Otherwise, it is probably prime. Repeating this test with different bases <code>a</code> increases confidence in the result.</p>
</section>

<section className={styles.section}>
    <h3>Discrete Logarithms and the Discrete Log Problem</h3>
    <p>The concept of <strong>discrete logarithms</strong> is a cornerstone in the construction of secure communication protocols. The difficulty of solving the discrete log problem is what provides the security in many cryptographic systems.</p>

    <h4>Definition of Discrete Logarithm</h4>
    <p>Given a cyclic group <code>G</code> with a generator <code>g</code> and an element <code>h ∈ G</code>, the discrete logarithm of <code>h</code> to the base <code>g</code> is the integer <code>x</code> such that:</p>
    <p className={styles.quote}><code>h = g^x</code></p>
    <p>This is denoted as:</p>
    <p className={styles.quote}><code>x = log<sub>g</sub>(h)</code></p>
    <p>where <code>log<sub>g</sub>(h)</code> is the discrete logarithm of <code>h</code> with respect to the base <code>g</code>.</p>
</section>

<section className={styles.section}>
    <h4>Discrete Logarithm in Modular Arithmetic</h4>
    <p>In modular arithmetic, the discrete logarithm problem is typically posed in the multiplicative group <code>Z<sub>p</sub><sup>*</sup></code>, where <code>p</code> is a prime number. The problem is to find <code>x</code> given <code>g</code> and <code>h</code> such that:</p>
    <p className={styles.quote}><code>h ≡ g^x (mod p)</code></p>
    <p>This is a difficult problem to solve efficiently, especially when <code>p</code> is large, making it a cornerstone of cryptographic security.</p>
</section>

<section className={styles.section}>
    <h4>The Discrete Log Problem</h4>
    <p>The <strong>Discrete Logarithm Problem (DLP)</strong> is the challenge of finding the discrete logarithm <code>x</code> given <code>g</code> and <code>h</code> in a cyclic group. Formally, given <code>g</code> and <code>h</code> in <code>G</code>, find an integer <code>x</code> such that:</p>
    <p className={styles.quote}><code>h = g^x</code></p>
    <p>This problem is computationally hard in many groups used in cryptography, such as <code>Z<sub>p</sub><sup>*</sup></code> and certain elliptic curve groups.</p>
</section>

<section className={styles.section}>
    <h4>Computational Complexity</h4>
    <p>The discrete logarithm problem is known to be hard to solve efficiently in general, particularly in the groups commonly used in cryptographic applications. The best-known algorithms, like the baby-step giant-step algorithm and the number field sieve, still require exponential or sub-exponential time to solve in large groups. This hardness forms the basis of security for many cryptographic systems.</p>

    <h5>Example in <code>Z<sub>p</sub><sup>*</sup></code></h5>
    <p>Consider <code>p = 23</code>, and let the generator <code>g = 5</code>. If we know that:</p>
    <p className={styles.quote}><code>h ≡ 5^x (mod 23)</code></p>
    <p>and <code>h = 8</code>, the problem is to find <code>x</code> such that:</p>
    <p className={styles.quote}><code>5^x ≡ 8 (mod 23)</code></p>
    <p>Through trial or using specific algorithms, we find that <code>x = 3</code> because:</p>
    <p className={styles.quote}><code>5^3 = 125 ≡ 8 (mod 23)</code></p>
</section>

<section className={styles.section}>
    <h4>Applications</h4>
    <p>The security of several cryptographic systems relies on the hardness of the discrete logarithm problem. For example:</p>
    <ul className={styles.list}>
        <li><strong>Diffie-Hellman Key Exchange:</strong> The security of this protocol is based on the difficulty of computing the discrete logarithm in a large prime modulus.</li>
        <li><strong>ElGamal Encryption:</strong> This encryption scheme also relies on the difficulty of solving the discrete log problem.</li>
        <li><strong>Digital Signatures:</strong> Algorithms like the Digital Signature Algorithm (DSA) and ECDSA (Elliptic Curve DSA) are based on the discrete log problem.</li>
    </ul>
</section>

<section className={styles.section}>
    <h4>Variants of the Discrete Log Problem</h4>
    <ul className={styles.list}>
        <li><strong>Computational Diffie-Hellman (CDH) Problem:</strong> Given <code>g<sup>a</sup></code> and <code>g<sup>b</sup></code> in <code>G</code>, compute <code>g<sup>ab</sup></code> without knowing <code>a</code> or <code>b</code>. This is believed to be as hard as solving the DLP.</li>        <li><strong>Decisional Diffie-Hellman (DDH) Problem:</strong> Given <code>g^a</code>, <code>g^b</code>, and <code>g^c</code> in <code>G</code>, determine whether <code>c = ab</code> modulo the group order. This is believed to be easier than the CDH and DLP.</li>
    </ul>
    <p>These problems and their computational difficulty are essential for ensuring the security of many cryptographic protocols.</p>
</section>
<section className={styles.section}>
    <h3>Quadratic Residues</h3>
    <p>A quadratic residue modulo <code>n</code> is an integer that can be expressed as the square of some integer modulo <code>n</code>. Quadratic residues play a significant role in number theory and cryptography, particularly in the construction of certain cryptographic protocols.</p>

    <h4>Definition</h4>
    <p>An integer <code>a</code> is called a quadratic residue modulo <code>n</code> if there exists an integer <code>x</code> such that:</p>
    <p className={styles.quote}><code>x^2 ≡ a (mod n)</code></p>
    <p>If no such <code>x</code> exists, then <code>a</code> is called a quadratic non-residue modulo <code>n</code>.</p>
</section>

<section className={styles.section}>
    <h4>Example</h4>
    <p>Consider the modulus <code>n = 7</code>. To determine the quadratic residues modulo 7, we compute the squares of the integers 0, 1, 2, ..., 6 modulo 7:</p>

    <p className={styles.quote}><code>0^2 ≡ 0 (mod 7)</code></p>
    <p className={styles.quote}><code>1^2 ≡ 1 (mod 7)</code></p>
    <p className={styles.quote}><code>2^2 ≡ 4 (mod 7)</code></p>
    <p className={styles.quote}><code>3^2 ≡ 9 ≡ 2 (mod 7)</code></p>
    <p className={styles.quote}><code>4^2 ≡ 16 ≡ 2 (mod 7)</code></p>
    <p className={styles.quote}><code>5^2 ≡ 25 ≡ 4 (mod 7)</code></p>
    <p className={styles.quote}><code>6^2 ≡ 36 ≡ 1 (mod 7)</code></p>

    <p>Thus, the quadratic residues modulo 7 are <code>{'{'}0, 1, 2, 4{'}'}</code>.</p>
</section>

<section className={styles.section}>
    <h4>Properties of Quadratic Residues</h4>
    <p>For a prime modulus <code>p</code>, exactly half of the non-zero elements of <code>Z<sub>p</sub></code> are quadratic residues. If <code>p ≡ 3 (mod 4)</code>, then for any quadratic residue <code>a</code>, the value of <code>x</code> such that:</p>
    <p className={styles.quote}><code>x^2 ≡ a (mod p)</code></p>
    <p>can be efficiently computed using:</p>
       <p className={styles.quote}><code>x ≡ a<sup>(p+1)/4</sup> (mod p)</code></p>

    <p>- For any integer <code>n</code>, the quadratic residues modulo <code>n</code> form a subgroup of the multiplicative group <code>Z<sub>n</sub><sup>*</sup></code>.</p>
</section>

<section className={styles.section}>
    <h4>Legendre Symbol</h4>
    <p>The <strong>Legendre symbol</strong> <code>(a/p)</code> is a notation that helps determine whether an integer <code>a</code> is a quadratic residue modulo a prime <code>p</code>. It is defined as:</p>

    <p className={styles.quote}>
        <code>
        (a/p) =
        <br />{'{'} 0 if a ≡ 0 (mod p)
        <br />{'}'} 1 if a is a quadratic residue modulo p and a ≠ 0 (mod p)
        <br />{'}'} -1 if a is a quadratic non-residue modulo p
        </code>
    </p>
</section>

<section className={styles.section}>
    <h4>Example of Application</h4>
    <p>In the context of the BBS generator, given a modulus <code>n = pq</code>, where <code>p</code> and <code>q</code> are large primes, and a seed <code>x<sub>0</sub></code>, the sequence is generated by:</p>

    <p className={styles.quote}><code>x<sub>i+1</sub> = x<sub>i</sub>^2 (mod n)</code></p>
    <p>The output bit at each step is the least significant bit of <code>x<sub>i</sub></code>.</p>

    <p>The hardness of breaking the BBS generator is based on the difficulty of the quadratic residuosity problem: given an integer <code>a</code> modulo <code>n</code>, determine whether <code>a</code> is a quadratic residue modulo <code>n</code> without knowing the factorization of <code>n</code>.</p>
</section>
<section className={styles.section}>
    <h1>Cryptographic Primitives</h1>
    <p>Cryptographic primitives are the building blocks of cryptographic systems, forming the basis for secure communication, data integrity, and authentication. Let's explore some key cryptographic primitives, including hash functions, symmetric and asymmetric encryption, and digital signatures.</p>
</section>

<section className={styles.section}>
    <h4>Hash Functions</h4>
    <p>Hash functions play a pivotal role. They are mathematical algorithms that take an input (or 'message') and return a fixed-size string of bytes. This output, typically a digest, appears random and is unique to the input provided.</p>
    
    <img src="/images/hashfunc.svg" alt="hash" className={styles.benefitsImage} style={{ display: 'block', margin: '0 auto' }} />

    <h4>Technical Breakdown</h4>
    <ul className={styles.list}>
        <li><strong>Determinism:</strong> A hash function is deterministic, meaning the same input will always produce the same output.</li>
        <li><strong>Fixed Output Size:</strong> Regardless of the input size, the hash output will always have a fixed length, making it predictable and consistent.</li>
        <li><strong>Pre-image Resistance:</strong> Given a hash value <code>h</code>, it is computationally infeasible to reverse-engineer the original input <code>m</code> such that <code>H(m) = h</code>.</li>
        <li><strong>Collision Resistance:</strong> It is hard to find two different inputs <code>m<sub>1</sub></code> and <code>m<sub>2</sub></code> such that <code>H(m<sub>1</sub>) = H(m<sub>2</sub>)</code>. This ensures that each unique input has a unique hash.</li>
        <li><strong>Avalanche Effect:</strong> A small change in the input (even a single bit) should produce a significantly different hash, ensuring the hash is sensitive to input variations.</li>
    </ul>

    <section className={styles.section}>
    <h4>Technically speaking...</h4>
    <p><strong>Technically speaking...</strong> A hash function <code>H</code> maps an input of arbitrary size <code>m</code> to a fixed-size output <code>h</code>, represented as:</p>

    <p className={styles.quote}><code>h = H(m)</code></p>

    <p>where:</p>
    <ul className={styles.list}>
        <li><code>H</code> is the hash function,</li>
        <li><code>m</code> is the input data,</li>
        <li><code>h</code> is the resulting hash or digest.</li>
    </ul>
</section>


    <h5>Common Hash Functions:</h5>
    <ul className={styles.list}>
        <li><strong>MD5:</strong> Once widely used, MD5 produces a 128-bit hash but is now considered insecure due to vulnerabilities.</li>
        <li><strong>SHA-1:</strong> Produces a 160-bit hash and is stronger than MD5 but still has known vulnerabilities.</li>
        <li><strong>SHA-256:</strong> A part of the SHA-2 family, this function produces a 256-bit hash and is widely used in secure applications, including Bitcoin.</li>
        <li><strong>SHA-3:</strong> A newer hash function with different design principles, offering strong security levels.</li>
    </ul>

    <h4>Applications</h4>
    <ul className={styles.list}>
        <li><strong>Data Integrity:</strong> Hash functions ensure data hasn't been altered during transmission or storage. For example, comparing the hash of a downloaded file with a known value can verify the file's integrity.</li>
        <li><strong>Digital Signatures:</strong> Hash functions are used to create a hash of a message, which can then be signed with a private key to ensure the message has not been tampered with.</li>
        <li><strong>Password Storage:</strong> Instead of storing passwords in plaintext, systems store the hash of the password. When a user attempts to log in, the system hashes the entered password and compares it to the stored hash.</li>
        <li><strong>Proof of Work:</strong> In blockchain systems like Bitcoin, hash functions generate cryptographic puzzles that miners must solve to add new blocks to the chain.</li>
        <li><strong>Message Authentication Codes (MACs):</strong> Hash functions are used with a secret key to create a MAC, ensuring the integrity and authenticity of a message.</li>
    </ul>


</section>


<section className={styles.section}>
    <h3>Encryption and Signature Schemes</h3>
    <p>When learning about digital signatures, a common narrative is presented: Alice, a user with a secret (private) key, can sign a message that can be verified by anyone using her corresponding public key.</p>
    
    <p>However, the underlying mechanisms are often overlooked. Implicitly, it is understood that deriving a private key from a public key should be impossible. This is crucial because it prevents anyone who possesses Alice's public key from producing signatures in her name (hence the term "private").</p>
    
    <p>Now, suppose Alice and another individual, Bob, agree on a generator point <code>G</code> on the elliptic curve. Alice then chooses a random number <code>d</code> from the set of integers modulo <code>q</code>, so <code>d &lt; q</code>. Also, let’s assume <code>d</code> is a large number, not just 12 or 35. This will be her private key.</p>

    <p>Alice proceeds to calculate <code>Q = [d]G</code>, leveraging the power of point doubling, and obtains another point in the group — this will be her public key, which she can safely share with Bob.</p>

    <p>Evidently, <code>Q</code> encodes information about the private key. Bob could try to calculate a number <code>d</code> such that <code>Q = [d]G</code>, but the problem is that if our elliptic curve group is “large enough,” it would take Bob a really, really long time. And this is precisely the secret sauce: finding <code>d</code>, even when knowing <code>Q</code> and <code>G</code>, should be nearly impossible. This is known as a version of the discrete logarithm problem (DLP).</p>

    <p>Of course, if our group happens to have 1,000 elements, or if the number Alice chooses is “small,” trying possible values of <code>d</code> is a manageable task. You can probably write a script that solves the problem in under 10 minutes — this is called brute forcing. The DLP problem really shines when we have massive groups. For instance, the curve 25519 has subgroups of order around <code>2^{250}</code>. That’s quite a large number. Good luck trying to brute-force <code>d</code>.</p>
</section>
<section className={styles.section}>
    <h3>Encryption</h3>
    <p>Alice now holds a number <code>d</code> as her private key, and Bob holds the corresponding public key <code>Q</code>, which is a point on the elliptic curve. What can they do with this?</p>
    
    <p>With these cryptographic tools, they’re ready to start building some cool stuff — like encrypting data!</p>
    
    <p>Imagine Bob wants to protect a message so that only Alice can read it. If they were teenagers in school, they might exchange a secret message written in code that only they can understand. Since they both know the secret code, they can both decrypt the message — this process is called symmetric encryption. Sounds straightforward, right?</p>
        
    <p>So, how does this work in real-world applications? Think about it like this: any message is just a sequence of zeros and ones — a binary number. If we modify this number, it turns into a seemingly random string of data, commonly known as ciphertext. The key here is that the transformation is reversible, meaning the original message can be recovered.</p>
    
    <p>To clarify, the reversibility is handled by the logical XOR operation. But don’t worry about that detail — the important part is that with a shared secret key, we can securely mask the original message.</p>
</section>

<section className={styles.section}>
    <h3>Cryptographic Accumulators</h3>
    <p>A cryptographic accumulator is a primitive with several advanced properties that can be used to build various zero-knowledge proof systems. Let’s explore the concept, the underlying mathematics, and an example application.</p>
    <p>A recent development in this area is that proof verifications can now be implemented in Ethereum smart contracts. Notably, the main type of accumulators is similar to RSA and is based on modular exponentiation, supported since the Byzantium fork (EIP-198).</p>
    <p>We can think of a cryptographic accumulator as a supercharged hash function that operates on sets. A standard hash function, like SHA-3, takes a single message and outputs a fixed-size hash. An accumulator, however, takes a set of values and compresses them into a single, constant-size number. In a sense, accumulators are the asymmetric cryptography counterpart to Merkle trees and Bloom filters.</p>
    <p>Consider the simplest commit-reveal protocol: Alice has a secret message and publishes its hash, called a commitment. Later, she reveals the whole message to Bob, who can verify that it matches the commitment. If Alice used an accumulator instead of a hash, she could choose to reveal only one, some, or all parts of the message.</p>
</section>

<section className={styles.section}>
    <h4>Proof of Membership</h4>
    <p>Accumulators work with sets of values. Later, we'll see examples of encoding data as set memberships. For now, assume Alice turned her message into a set of words and published the associated accumulator (which resembles a hash).</p>
    <p>She can select some of the words and produce a proof, which is another constant-size number. This proof allows Bob to verify the integrity of the revealed words, confirming that they belong to the committed set. However, Bob does not learn anything about the other parts that were kept secret—this property is known as zero-knowledge.</p>
</section>

<section className={styles.section}>
    <h4>Proof of Nonmembership</h4>
    <p>Interestingly, the opposite operation is also possible: Alice can prove to Bob that some words were not part of the committed set.</p>
    <p>For example, Bob asks whether the first word was "cat" or perhaps "dog." Alice can provide proof that it was neither, and Bob can verify this. Yet, Bob still has no clue about what the actual word could be.</p>
    <p>This is a unique property. Compare this with hash functions and Merkle trees: a hash of a value is not zero-knowledge—one can take any guess and check its hash. Or the value is protected by an unguessable salt, in which case one cannot prove the non-equality or nonmembership of a particular guess.</p>
    <p>Accumulators resolve this paradox. Note that this type of proof does grow in size with the amount of data needed to disprove something.</p>
</section>

<section className={styles.section}>
    <h4>The Mathematics</h4>
    <p>There are many variants of accumulators and formal studies on them. Let’s focus on one based on RSA. I’ll assume some familiarity with RSA (you can check Wikipedia for a primer) and present the basic ideas.</p>
    <p>The first idea is to work with sets by computing the product of all values in a set. If we map the input data to prime numbers, their product will uniquely represent the set. Otherwise, there could be confusion: <code>&#123;2, 6&#125;</code> would give the same product (12) as <code>&#123;3, 4&#125;</code>. Sets will be written with curly braces like <code>&#123;x&#125;</code> and their product with capital letters like <code>X</code>.</p>

    <p>Let’s pick a modulus <code>N</code> (the product of two large primes) and a generator <code>G</code> (any other prime). We’ll come back to this below.</p>
    <p>For a set of secret values <code>&#123;u&#125;</code> and their product <code>U</code>, the accumulator <code>C</code> is computed by modular exponentiation. <code>C</code> is a number roughly the same size as <code>N</code>.</p>
    <p className={styles.quote}><code>C = G<sup>U</sup> mod N</code></p>
    <p>Next, let’s take a subset <code>&#123;r&#125;</code> of values from <code>&#123;u&#125;</code> to be revealed. To compute a proof, we actually need all the other values of <code>&#123;u&#125;</code> that remain secret, noted as <code>&#123;s&#125;</code>. In product form, we have <code>R &times; S = U</code>. The proof <code>P</code> is:</p>
    <p className={styles.quote}><code>P = G<sup>S</sup> mod N</code></p>
    <p>Then Alice reveals <code>&#123;r&#125;</code> and <code>P</code> to Bob. He will compute <code>C'</code> and verify that it equals the commitment <code>C</code>:</p>
    <p className={styles.quote}><code>C' = P<sup>R</sup> mod N</code></p>
    <p>By replacing <code>P</code>, we see that <code>C'</code> must equal <code>C</code>:</p>
    <p className={styles.quote}><code>C' = G<sup>(S &times; R)</sup> = G<sup>U</sup> mod N</code></p>
    <p>The system relies on the same assumptions as RSA:</p>
    <ul className={styles.list}>
        <li>The hardness of the discrete logarithm (Bob finding <code>U</code> from <code>C</code>, or <code>S</code> from <code>P</code>)</li>
        <li>The RSA problem (Alice forging a false proof <code>P</code>)</li>
        <li>The hardness of integer factorization (finding the factors of <code>N</code>)</li>
    </ul>
    <p>This also assumes that <code>S</code> is very large; otherwise, Bob could brute-force it. To prevent this, Alice can add a large random prime into <code>&#123;u&#125;</code>, which we could call a salt.</p>
    <p>Proofs of non-memberships are a bit trickier, but here's the idea: take a set <code>&#123;x&#125;</code> that contains some elements not in the committed <code>&#123;u&#125;</code>, in addition to those that are (the set <code>&#123;r&#125;</code> above). The GCD (greatest common divisor) of <code>X</code> and <code>U</code> will be <code>R</code>. Alice will use the extended Euclidean algorithm to provide the coefficients that allow Bob to verify this fact.</p>
</section>

<section className={styles.section}>
    <h4>Trusted Setup</h4>
    <p>A drawback of this system is that it requires the modulus <code>N</code> to be the product of two primes, but Alice must not know those factors. There are two approaches to this:</p>
    <ul className={styles.list}>
        <li>Bob can generate <code>N</code> and ask Alice to make her proofs with it, and he will trust them. But Bob can use his factors to forge accumulators and proofs, so others will not trust them, and Alice has deniability.</li>
        <li>For public use, we need a trusted setup. This means that a computer must generate <code>N</code> from random factors and forget the factors. If it is believed that no one saved the factors, the system can be trusted.</li>
    </ul>
</section>

<section className={styles.section}>
    <h3>Why Do We Need Off-Chain Computation?</h3>
    <p>As blockchain technology continues to evolve, off-chain computation is becoming increasingly crucial for enhancing the performance and scalability of blockchain networks. But why is this shift necessary?</p>

    <h4>Scalability</h4>
    <p>Blockchains are great, but they have their limits, especially when it comes to scalability. The decentralized nature of blockchain networks creates inherent challenges, particularly when too many on-chain computations start clogging up the system. Think of on-chain operations as the main stage at a concert—too many people trying to get on stage at once, and the show grinds to a halt. By offloading complex calculations and data storage to off-chain systems, we can keep the show running smoothly. Off-chain computation handles the heavy lifting, letting the blockchain focus on what it does best: secure, decentralized transaction validation. It’s like having a backstage crew working behind the scenes to ensure the performance goes off without a hitch.</p>

    <h4>Cost Efficiency</h4>
    <p>Let’s face it—on-chain transactions can get expensive, especially when the network is busy. It’s like trying to catch an Uber during surge pricing; the cost can skyrocket when everyone’s trying to use the service at once. Off-chain computation, however, offers a budget-friendly alternative. By taking care of the computational heavy lifting off-chain, developers can significantly reduce the gas fees associated with executing smart contracts. This makes blockchain applications not just scalable, but also more economically viable, especially for businesses watching their bottom line.</p>

    <h4>Enhanced Functionality</h4>
    <p>Not all data is created equal, and not all data belongs on the blockchain. Some applications require access to large volumes of data or need to perform real-time analysis—tasks that are just too heavy for the blockchain alone. Off-chain computation steps in here, enabling smart contracts to handle more complex, sophisticated tasks. Whether it’s crunching numbers for financial derivatives or running predictive analytics, off-chain resources open up a world of possibilities for what blockchain applications can do.</p>

    <h4>Privacy and Security</h4>
    <p>Privacy matters, especially when dealing with sensitive data. You wouldn’t want your private emails broadcasted on a public billboard, so why would you store sensitive data on a public blockchain? Off-chain computation offers a secure alternative, processing data in environments where privacy can be maintained. With tools like zero-knowledge proofs (zk-proofs), it’s possible to verify computations without exposing the underlying data, ensuring compliance with privacy regulations like GDPR. It’s like having a secret vault where your sensitive information is safe, but still accessible when you need to prove it’s there.</p>

    <h4>Flexibility and Interoperability</h4>
    <p>In today’s interconnected world, no blockchain is an island. Off-chain computation makes it easier for different blockchain systems, and even traditional databases, to talk to each other. By using decentralized oracles, off-chain data can be pulled into the blockchain, allowing for more complex and meaningful interactions across various platforms. This flexibility is key for integrating blockchain technology into existing business processes, making it not just a cool new tool, but a practical one too.</p>

    <p>In short, off-chain computation isn’t just a nice-to-have—it’s a must-have for tackling the challenges of scalability, cost, functionality, privacy, and interoperability in blockchain networks. By shifting some of the workload off-chain, we can unlock the full potential of blockchain technology, paving the way for wider adoption across various industries.</p>
</section>
<section className={styles.section}>
    <h3>What on Earth is Zero-Knowledge Proofs?</h3>
    <p>Zero-knowledge proofs (ZKPs) sound like something straight out of a sci-fi movie, but they're a fascinating and powerful concept in cryptography. In essence, a zero-knowledge proof allows one party (the prover) to prove to another party (the verifier) that they know a specific piece of information without revealing what that information is. It’s like showing someone you know the password to a secret door without ever saying the password itself.</p>
    
    <p>Imagine you want to prove to a friend that you can solve a particular puzzle, but you don’t want to give away the solution. A zero-knowledge proof is a way to convince your friend that you can indeed solve the puzzle, without them ever knowing how you did it.</p>
</section>

<section className={styles.section}>
    <h4>How Do ZKPs Work?</h4>
    <p>The magic behind zero-knowledge proofs lies in a few core properties:</p>
    <ul className={styles.list}>
        <li><strong>Completeness:</strong> If the statement is true and the prover follows the protocol, the verifier will be convinced.</li>
        <li><strong>Soundness:</strong> If the statement is false, no dishonest prover can convince the verifier that it’s true, except with some negligible probability.</li>
        <li><strong>Zero-Knowledge:</strong> If the statement is true, the verifier learns nothing other than the fact that the statement is true.</li>
    </ul>
</section>

<section className={styles.section}>
    <p>Let’s take an example from everyday life. Say you’re colorblind and your friend isn’t. You have two balls that look identical to you, but your friend says they are different colors. How can your friend prove they’re different without showing you the colors?</p>
    
    <p>Here’s the idea: Your friend can show you one ball and then hide it behind their back, randomly swapping the balls or not. They then show you the ball again and ask if it’s the same one or the other one. If you can’t tell the difference, you’ll guess right only half the time. But if your friend repeats this many times and you still guess right every time, they’ve convinced you that the balls are indeed different, without ever revealing which is which. This is a very simplified version of how zero-knowledge proofs work.
    </p>
    <p>Want to learn more? Stay tuned to Web3Citizen! 😊</p></section>

<section className={styles.section}>
    <h4>References</h4>
    <ul className={styles.list}>
        <li><a href="https://mit6875.github.io/HANDOUTS/numbertheory.pdf" target="_blank" rel="noopener noreferrer">MIT - Number Theory in Cryptography</a></li>
        <li><a href="https://zeroknowledge.fm/" target="_blank" rel="noopener noreferrer">Zero Knowledge Podcast</a></li>
        <li><a href="https://zk-learning.org/" target="_blank" rel="noopener noreferrer">ZK-Learning Platform</a></li>
        <li><a href="https://zkhack.dev/whiteboard/" target="_blank" rel="noopener noreferrer">ZK Hack - Whiteboard Sessions</a></li>
        <li><a href="https://github.com/matter-labs/awesome-zero-knowledge-proofs" target="_blank" rel="noopener noreferrer">Matter Labs - Awesome Zero-Knowledge Proofs</a></li>
        <li><a href="https://vivianblog.hashnode.dev/how-to-create-a-zero-knowledge-dapp-from-zero-to-production" target="_blank" rel="noopener noreferrer">How to Create a Zero-Knowledge Dapp - Hashnode Blog</a></li>
        <li><a href="https://crypto.stanford.edu/pbc/notes/crypto/zk.html" target="_blank" rel="noopener noreferrer">Stanford - Zero-Knowledge Proofs Notes</a></li>
    </ul>
</section>





     <SideIcons />
     <BackToTop />
    </div>



  );
  }