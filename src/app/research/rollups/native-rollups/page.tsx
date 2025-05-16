"use client";
import React from 'react';
import styles from '../BasedRollups.module.css';
import BackToTop from '@/components/BackToTop';

export default function NativeRollups() {
  return (
    <div className={styles.articleContainer}>
      <section className={styles.section}>
        <h2>Your Intro to Native Rollups</h2>
        <p>Published:  2025-03 </p>
        <p>Contributors: <a href="https://twitter.com/eugenia_0x" target="_blank" rel="noopener noreferrer" className={styles.twitterLink}>@eugenia_0x</a>
        </p>
        <br />

        <p>
          In traditional rollups, execution happens on L2, but correctness is ensured either:
        </p>
        <ul className={styles.list}>
          <li>Optimistically — via fraud proofs (only checked if disputed)</li>
          <li>Or through zk-rollups — using validity proofs</li>
        </ul>

        <br /><br />
        <img src="/images/rollups/native.png" className={styles.benefitsImage} />
        <br /><br />
        <br /><br />

        <p>
          Native rollups blur this line by using Ethereum's L1 execution layer to verify L2 transactions. 
          Instead of relying on fraud or zk proofs, native rollups ask Ethereum itself to re-execute L2 transactions, ensuring correctness directly on L1.
        </p>

        <p>
          This removes the need for external proof systems. Transactions are still processed off-chain, but Ethereum validators validate their execution, enforcing state transitions natively.
        </p>

        <br />

        <h1>Characteristics of Native Rollups</h1>
        <ul className={styles.list}>
          <li><strong>Leverages L1 security:</strong> State transitions are verified by Ethereum itself, requiring no extra trust assumptions.</li>
          <li><strong>Guaranteed EVM compatibility:</strong> Native rollups are always EVM-equivalent — no need for opcode catch-up.</li>
          <li><strong>Programmable:</strong> Unlike static execution shards, native rollups are fully programmable.</li>
          <li><strong>Customizable:</strong> Each rollup can have its own fees, governance, and sequencer setup.</li>
          <li><strong>Non-EVM support possible:</strong> With a translation layer, native rollups could even support non-EVM logic (though with greater effort).</li>
        </ul>

        <br />

        <h1>Benefits</h1>
        <br /><br />
        <img src="/images/rollups/benefits-native.png" className={styles.benefitsImage} />
        <br /><br />
        <br /><br />
        <ul className={styles.list}>
          <li><strong>Fewer points of failure:</strong> Less reliance on governance upgrades to maintain compatibility with Ethereum.</li>
          <li><strong>Composability:</strong> L1 can validate and interact directly with L2 state. Rollups can interoperate as if on the same chain.</li>
          <li><strong>Improved network effects:</strong> A unified ecosystem drives better UX and more integrated tooling.</li>
          <li><strong>Simplicity:</strong> Native rollups reuse Ethereum logic via the <code>EXECUTE</code> precompile — reducing code complexity and bugs.</li>
        </ul>

        <br />

        <h1>What Do Native Rollups Need?</h1>
        <h3>EXECUTE Precompile</h3>
        <p>
          A hard fork is required to introduce a precompile contract called <code>EXECUTE</code>, exposing the EVM engine to the application layer.
          This lets an L2 submit a batch of transactions to Ethereum, which then verifies the resulting state.
        </p>

        <br /><br />
        <img src="/images/rollups/execute.png" className={styles.benefitsImage} />
        <br /><br />
        <br /><br />

        <p>
          The <code>execute()</code> function takes:
        </p>
        <ul className={styles.list}>
          <li>Pre-state root (current state)</li>
          <li>Post-state root (after L2 batch)</li>
          <li>Transaction trace</li>
          <li>Gas used</li>
        </ul>
        <p>
          If Ethereum accepts the state transition, it finalizes the batch with the same certainty as an L1 transaction.
        </p>

        <br /><br />
        <img src="/images/rollups/stateroot.png" className={styles.benefitsImage} />
        <br /><br />

        <br />

        <h3>Gas Accounting for EXECUTE</h3>
        <p>
          Justin Drake proposed a separate gas regime for EXECUTE calls, with a per-block gas limit for rollup execution. 
          The cost is dynamic — <code>GAS_PRICE</code> adjusts based on block demand and total EXECUTE usage.
        </p>

        <br /><br />
        <img src="/images/rollups/exec.png" className={styles.benefitsImage} />
        <br /><br />

        <br />

        <h3>Possible Need: EIP-7862</h3>
        <p>
          EIP-7862 proposes that a block's <code>ExecutionPayload</code> references the post-state root of the <em>previous</em> block.
          This change would give rollup proposers 12 extra seconds to complete state verification.
        </p>

        <p>
          For native rollups, this means:
        </p>
        <ul className={styles.list}>
          <li>A rollup's batch could be included in block N</li>
          <li>Its final state root is confirmed in block N+1</li>
        </ul>
        <p>
          This levels the playing field between provers and avoids giving unfair speed advantages to specific validators.
        </p>

        <br />

        <h3>Better Proving</h3>
        <p>
          As rollups go native and transaction load increases, improving proof generation becomes key to scalability. 
          ZK rollups with faster provers or hardware acceleration (like ASICs) can help shift L1 validation from re-execution to lightweight zk-proof verification.
        </p>

        <br />

        <h3>Call Data Throughput Enhancements</h3>
        <p>
          Native rollups still depend on L1 for data availability. Optimizing calldata costs and throughput helps ensure rollups post data efficiently and cost-effectively.
        </p>
      </section>
      <BackToTop />
    </div>
  );
} 