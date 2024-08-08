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

        We'll kick things off by wrapping our heads around some number theory basics—think of it as the secret sauce that makes cryptography tick. We’ll explore concepts like groups, modular arithmetic, and the Chinese remainder theorem (which is as cool as it sounds). After that, we'll dive into cryptographic primitives and some algebraic goodies. This math-y appetizer will set us up nicely to tackle the main course: the core principles of zero-knowledge proofs (which are not going to be address in this article).</p>
      
        <img src="/images/aim.svg" alt="Aims" className={styles.benefitsImage} />

      </section>

      <section className={styles.section}>
        <h1>Number Theory</h1>
        <p>Understanding the principles of number theory is relevant for anyone interested in cryptography and zk. It provides the mathematical foundation that underpins much of modern cryptographic practice. Concepts such as group theory and modular arithmetic form the building blocks for more advanced topics. By exploring these ideas, we can better appreciate how they contribute to the security and efficiency of cryptographic algorithms, and ultimately, to the implementation of ZKPs.
        </p>
        <h3>Groups and Group Theory</h3>
        <p>A group is like the ultimate math playground. Let's think that you have a bunch of objects (that’s your set), and a way to mix and match them (that’s your operation). The cool part? No matter how you combine these objects, they always stay within the playground—no one sneaks out! There's also a "do nothing" element (called the identity element) that just hangs out and doesn’t change anything when you combine it with other objects. And just like in a well-structured playground, there’s always a way to "undo" any action (that’s the inverse element), making sure things can go back to how they were. 
        <br></br><br></br>

        In cryptography, we often play with abelian groups—where the order of operations doesn’t matter, just like how it doesn’t matter whether you put on your socks or shoes first (okay, maybe it does, but you get the idea).  <br></br><br></br>
        </p>   
        <h3>Definition:</h3>
    <p>A group is a set <code>G</code> paired with a binary operation (think of it as a special way to combine any two elements) that satisfies four key rules, or axioms:</p>

    <ol className={styles.list}>
        <li>
            <strong>Closure:</strong> If you take any two members <code>a</code> and <code>b</code> from our group <code>G</code> and combine them using our special operation (let’s call it <code>*</code>), the result will always be another member of the group. In other words, no one leaves the club! 
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

    <p>In cryptography, we often hang out in groups where the order of operations doesn’t matter—these are called <strong>abelian groups</strong>. They make our lives easier, much like how it’s easier to enjoy a pizza whether you start with the crust or the toppings (okay, maybe that one’s debatable).</p>
    <h3>Example: The Additive Group <code>Z<sub>N</sub></code></h3>
    <p>Let’s jump into a concrete example to see a group in action! Meet the <strong>additive group</strong> <code>Z<sub>N</sub></code>, which is about adding numbers together. This group consists of integers from <code>0</code> to <code>N-1</code> and uses addition as its operation. But here’s the twist—it’s all done <strong>modulo</strong> <code>N</code>. Let's think it as a boardgame where once you reach <code>N</code>, you wrap around back to zero (like starting over on a clock). The identity element here is <code>0</code> (because adding 0 doesn’t change anything), and for any number <code>x</code>, its inverse is <code>N - x</code>, which brings the sum back to 0 under modulo <code>N</code>.</p>
</section>

<section className={styles.section}>
    <h3>Abelian (Commutative) Groups</h3>
    <p>Next up, we’ve got <strong>abelian groups</strong>—the chill, go-with-the-flow type of groups. In an abelian group, the order of combining elements doesn’t matter. This means <code>a * b</code> is the same as <code>b * a</code> for any elements <code>a</code> and <code>b</code> in the group. This property is super handy in cryptography because it simplifies many operations. You can think of abelian groups as the math equivalent of “no fuss, no muss.”</p>
</section>

<section className={styles.section}>
    <h3>Cyclic Groups</h3>
    <p>Now, let’s talk about <strong>cyclic groups</strong>. These groups are like the ultimate one-hit-wonder band because everything in the group can be generated by just one element! This special element, called the <strong>generator</strong>, can be combined with itself (repeatedly, like powers) to produce every other element in the group.</p>

    <h4>Formal Definition</h4>
    <p>Formally, a group <code>G</code> is called cyclic if there exists an element <code>g</code> in <code>G</code> such that every element <code>h</code> in <code>G</code> can be written as <code>h = g^k</code> for some integer <code>k</code>. The element <code>g</code> is the generator of the group, and we often denote the group as <code>⟨g⟩</code>.</p>
    <h3>Discrete Logarithms</h3>
    <p>Now, let's talk about discrete logarithms—a concept that makes our digital lives a lot safer.</p>

    <h4>Definition:</h4>
    <p>Given a cyclic group <code>G</code> with a generator <code>g</code> and an element <code>h</code> in <code>G</code>, the discrete logarithm of <code>h</code> to the base <code>g</code> is the integer <code>x</code> such that:</p>

    <p className={styles.quote}><code>h = g^x</code></p>
    <p>This is denoted as <code>x = log<sub>g</sub>(h)</code>.</p>

    <h4>Computational Complexity:</h4>
    <p>Computing discrete logarithms isn’t just hard—it’s <em>cryptographically</em> hard, meaning it's tough enough to keep your secrets safe. This difficulty is the backbone of many secure communication protocols, like the Diffie-Hellman key exchange and digital signatures.</p>

    <h4>Example in <code>Z*<sub>N</sub></code></h4>
    <p>In the multiplicative group <code>Z*<sub>N</sub></code> (the set of integers less than <code>N</code> that are coprime to <code>N</code>), the discrete logarithm problem can be described like this: Given <code>g</code> and <code>h</code> in <code>Z*<sub>N</sub></code>, find the exponent <code>x</code> such that:</p>

    <p className={styles.quote}><code>g^x ≡ h (mod N)</code></p>
    <p>It’s a challenge that cryptographers love to solve, but thankfully for us, it’s a puzzle that takes a long time without the right tools.</p>


        </section>


        <section className={styles.section}>
        <h1>Modular Arithmetic</h1>
        <p>Imagine you’re playing a game where numbers “wrap around” once they reach a certain value—like a clock where after hitting 12, you start back at 1. This is the essence of <strong>modular arithmetic</strong>, a key player in number theory and cryptography that helps us perform operations within a finite set of numbers.</p>

    <h4>Definition:</h4>
    <p>For integers <code>a</code> and <code>b</code>, and a positive integer <code>N</code> (our modulus), we say that <code>a</code> is <strong>congruent</strong> to <code>b</code> modulo <code>N</code>, written as:</p>

    <p className={styles.quote}><code>a ≡ b (mod N)</code></p>
    <p>if <code>N</code> divides the difference <code>a - b</code>. In other words, <code>a</code> and <code>b</code> leave the same remainder when divided by <code>N</code>.</p>

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
    <p>Consider the modulus <code>N = 7</code>. In this case, the integers <code>{0, 1, 2, 3, 4, 5, 6}</code> form a complete set of residues modulo 7. If we compute <code>3 + 5</code> modulo 7, we get:</p>

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

    <p>In the world of cryptography, where we often work with huge numbers, this efficiency is golden. Modular exponentiation is the backbone of many cryptographic algorithms, helping us keep data secure without needing a supercomputer for every calculation.</p>
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

    <p>where <code>x</code> and <code>y</code> are integers. This extra step is super useful for finding multiplicative inverses in modular arithmetic.</p>
</section>

<section className={styles.section}>
    <h3>Applications</h3>
    <p>The Euclidean Algorithm and its extended are essential in algorithms like RSA (stay tuned, we’ll cover that soon!), where finding the multiplicative inverse is a crucial step. Mastering these algorithms is key to cracking many cryptographic processes.</p>

    <h3>Chinese Remainder Theorem</h3>
    <p>The <strong>Chinese Remainder Theorem (CRT)</strong> simplifies computations by breaking them down into smaller, more manageable parts. This is especially useful in cryptography, where you often need to juggle several modular equations at the same time.</p>

    <h4>Statement of the Theorem</h4>
    <p>The Chinese Remainder Theorem states that if you have a set of integers <code>n<sub>1</sub>, n<sub>2</sub>, \dots, n<sub>k</sub></code> that are pairwise coprime (meaning the greatest common divisor of any pair is 1), and any integers <code>a<sub>1</sub>, a<sub>2</sub>, \dots, a<sub>k</sub></code>, then there exists a unique integer <code>x</code> modulo <code>N</code>, where <code>N</code> is the product of the <code>n<sub>i</sub></code>'s, such that:</p>

    <p className={styles.quote}><code>x ≡ a<sub>1</sub> (mod n<sub>1</sub>)</code></p>
    <p className={styles.quote}><code>x ≡ a<sub>2</sub> (mod n<sub>2</sub>)</code></p>
    <p className={styles.quote}><code>\vdots</code></p>
    <p className={styles.quote}><code>x ≡ a<sub>k</sub> (mod n<sub>k</sub>)</code></p>

    <p>In other words, CRT guarantees there’s a unique solution modulo <code>N</code> for this system of congruences.</p>
    <h3>Chinese Remainder Theorem</h3>
    <p>The <strong>Chinese Remainder Theorem (CRT)</strong> is like a magic trick for solving multiple modular arithmetic equations at once. It simplifies computations by breaking them down into smaller, more manageable parts. This is especially useful in cryptography, where you often need to juggle several modular equations at the same time.</p>
    <h4>Statement of the Theorem</h4>
    <p>The Chinese Remainder Theorem states that if you have a set of integers <code>n<sub>1</sub>, n<sub>2</sub>, \dots, n<sub>k</sub></code> that are pairwise coprime (meaning the greatest common divisor of any pair is 1), and any integers <code>a<sub>1</sub>, a<sub>2</sub>, \dots, a<sub>k</sub></code>, then there exists a unique integer <code>x</code> modulo <code>N</code>, where <code>N</code> is the product of the <code>n<sub>i</sub></code>'s, such that:</p>
    <p className={styles.quote}><code>x ≡ a<sub>1</sub> (mod n<sub>1</sub>)</code></p>
    <p className={styles.quote}><code>x ≡ a<sub>2</sub> (mod n<sub>2</sub>)</code></p>
    <p className={styles.quote}><code>\vdots</code></p>
    <p className={styles.quote}><code>x ≡ a<sub>k</sub> (mod n<sub>k</sub>)</code></p>
    <p>In other words, CRT guarantees there’s a unique solution modulo <code>N</code> for this system of congruences.</p>

    <h4>Construction of the Solution</h4>
    <p>To find the solution <code>x</code>, follow these steps:</p>

    <ol className={styles.list}>
    <li><strong>Compute the product <code>N</code></strong> of all the moduli:
        <p className={styles.quote}><code>N = n<sub>1</sub> × n<sub>2</sub> × ... × n<sub>k</sub></code></p>
    </li>
    <li><strong>Compute the partial product <code>N<sub>i</sub></code></strong> by dividing <code>N</code> by each <code>n<sub>i</sub></code>:
        <p className={styles.quote}><code>N<sub>i</sub> = N / n<sub>i</sub></code></p>
    </li>
</ol>
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
    <h3>Applications</h3>

    <p>The Chinese Remainder Theorem is used in various cryptographic algorithms to boost efficiency. For example, in RSA decryption, CRT can be used to perform computations modulo smaller primes instead of a large composite number, significantly speeding up the process.</p>

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
    <h4>Applications</h4>
    <p>The multiplicative group <code>Z<sub>N</sub><sup>*</sup></code> is at the heart of many cryptographic algorithms, particularly those involving modular arithmetic, such as RSA. The security of these algorithms often hinges on the properties of <code>Z<sub>N</sub><sup>*</sup></code> and the difficulty of solving certain problems within this group, like the discrete logarithm problem.</p>
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
    <h4>Applications</h4>
    <p>Primality testing is a critical component in the generation of cryptographic keys. For example, in RSA, large prime numbers are essential for creating the public and private keys. Efficient and reliable primality testing ensures that these primes are indeed suitable for cryptographic use.</p>
</section>

<section className={styles.section}>
    <h3>Discrete Logarithms and the Discrete Log Problem</h3>
    <p>The concept of <strong>discrete logarithms</strong> is a cornerstone in cryptography, particularly in the construction of secure communication protocols. The difficulty of solving the discrete log problem is what provides the security in many cryptographic systems.</p>

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
    <h4>Applications in Cryptography</h4>
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
    <h4>Applications</h4>
    <p>Quadratic residues are used in various cryptographic protocols, such as:</p>
    <ul className={styles.list}>
        <li><strong>Quadratic Residue Encryption:</strong> A cryptographic scheme that relies on the hardness of distinguishing quadratic residues from non-residues.</li>
        <li><strong>Blum-Blum-Shub (BBS) Pseudorandom Generator:</strong> A cryptographic pseudorandom number generator based on quadratic residues. The security of the BBS generator relies on the difficulty of predicting quadratic residues.</li>
        <li><strong>Zero-Knowledge Proofs:</strong> Quadratic residues are often used in zero-knowledge proof systems, where a prover demonstrates knowledge of a square root modulo <code>n</code> without revealing the root itself.</li>
    </ul>
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
    <p>Cryptographic primitives are the fundamental building blocks of cryptographic systems, forming the basis for secure communication, data integrity, and authentication. These essential tools are the foundation upon which more complex cryptographic protocols and algorithms are built. Let's explore some key cryptographic primitives, including hash functions, symmetric and asymmetric encryption, and digital signatures, which are crucial for implementing secure cryptographic systems.</p>
</section>

<section className={styles.section}>
    <h4>Hash Functions</h4>
    <p>In the world of cryptography, hash functions play a pivotal role. They are mathematical algorithms that take an input (or 'message') and return a fixed-size string of bytes. This output, typically a digest, appears random and is unique to the input provided.</p>

    <h5>Technical Breakdown:</h5>
    <ul className={styles.list}>
        <li><strong>Determinism:</strong> A hash function is deterministic, meaning the same input will always produce the same output.</li>
        <li><strong>Fixed Output Size:</strong> Regardless of the input size, the hash output will always have a fixed length, making it predictable and consistent.</li>
        <li><strong>Pre-image Resistance:</strong> Given a hash value <code>h</code>, it is computationally infeasible to reverse-engineer the original input <code>m</code> such that <code>H(m) = h</code>.</li>
        <li><strong>Collision Resistance:</strong> It is hard to find two different inputs <code>m<sub>1</sub></code> and <code>m<sub>2</sub></code> such that <code>H(m<sub>1</sub>) = H(m<sub>2</sub>)</code>. This ensures that each unique input has a unique hash.</li>
        <li><strong>Avalanche Effect:</strong> A small change in the input (even a single bit) should produce a significantly different hash, ensuring the hash is sensitive to input variations.</li>
    </ul>

    <h5>Common Hash Functions:</h5>
    <ul className={styles.list}>
        <li><strong>MD5:</strong> Once widely used, MD5 produces a 128-bit hash but is now considered insecure due to vulnerabilities.</li>
        <li><strong>SHA-1:</strong> Produces a 160-bit hash and is stronger than MD5 but still has known vulnerabilities.</li>
        <li><strong>SHA-256:</strong> A part of the SHA-2 family, this function produces a 256-bit hash and is widely used in secure applications, including Bitcoin.</li>
        <li><strong>SHA-3:</strong> A newer hash function with different design principles, offering strong security levels.</li>
    </ul>

    <h5>Applications:</h5>
    <ul className={styles.list}>
        <li><strong>Data Integrity:</strong> Hash functions ensure data hasn't been altered during transmission or storage. For example, comparing the hash of a downloaded file with a known value can verify the file's integrity.</li>
        <li><strong>Digital Signatures:</strong> Hash functions are used to create a hash of a message, which can then be signed with a private key to ensure the message has not been tampered with.</li>
        <li><strong>Password Storage:</strong> Instead of storing passwords in plaintext, systems store the hash of the password. When a user attempts to log in, the system hashes the entered password and compares it to the stored hash.</li>
        <li><strong>Proof of Work:</strong> In blockchain systems like Bitcoin, hash functions generate cryptographic puzzles that miners must solve to add new blocks to the chain.</li>
        <li><strong>Message Authentication Codes (MACs):</strong> Hash functions are used with a secret key to create a MAC, ensuring the integrity and authenticity of a message.</li>
    </ul>
</section>




     <SideIcons />
     <BackToTop />
    </div>



  );
  }