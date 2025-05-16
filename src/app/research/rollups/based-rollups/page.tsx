"use client";
import React from 'react';
import styles from '../BasedRollups.module.css';
import BackToTop from '@/components/BackToTop';

export default function BasedRollups() {
  return (
    <div className={styles.articleContainer}>
      <section className={styles.section}>
        <h2>Based Rollups</h2>
        <p>Published:  2025-03 </p>
        <p>Contributors: <a href="https://twitter.com/eugenia_0x" target="_blank" rel="noopener noreferrer" className={styles.twitterLink}>@eugenia_0x</a>
        </p>
        <br />
        <div className={styles.quoteContainer}>
          <p><strong>In this guide you will find: </strong></p>
          <ul>
            <li>An introduction to Based Rollups.</li>
            <li>Pros & Cons of Based Rollups.</li>
            <li>What we need to build better rollups.</li>
            <li>The current based landscape.</li>
          </ul>
        </div>
        <br />
        <br />

        <h1>What is a based rollup?</h1>
        <p>
          Rollups hold three different aspects: DA, consensus and execution.
          Based Rollups use base sequencing as the method for sequencing transactions and block building. With this method, L1 consensus (proposers, validators) holds the role to decide the ordering of transactions of the rollup.
          <br /><br />
          "More concretely, a based rollup is one where the next L1 proposer may, in collaboration with L1 searchers and builders, permissionlessly include the next rollup block as part of the next L1 block."
          <br /><br />
          The "based" part only speaks to its sequencing on the consensus level. Consensus of the rollup remains tied to L1 validators, while execution, state validation (optimistic or ZK) and DA is open to the design choice of each rollup team.
          <br /><br />
        </p>
        <ul>
          <li>Based Sequencing + Rollup Execution = Based Rollup</li>
          <li>Based Sequencing + Alt DA = Based Validium</li>
          <li>Based Sequencing + L1 (Native Rollup) = Ultrasound Rollup</li>
        </ul>
        <p>
          <br /><br />
          <img src="/images/rollups/rollups.png" className={styles.benefitsImage} />
          <br /><br />
          <br /><br />
          All of this without any change needed to L1. In fact we already have two based rollups in mainnet: <a href="https://twitter.com/taikoxyz" target="_blank" rel="noopener noreferrer" className={styles.twitterLink}>@taikoxyz</a> Alethia and <a href="https://twitter.com/0xFacet" target="_blank" rel="noopener noreferrer" className={styles.twitterLink}>@0xFacet</a>. However, to make better based rollups some L1, L2 and sidecar software improvements need to be implemented.
        </p>

        <br />
        <br />

        <h1>Existing rollup sequencing architecture</h1>
        <p>
          A centralized sequencer is easier to launch, it protects us against MEV and allows for quicker transactions (as well as low costs!).<br /><br />
          But they introduce different drawbacks:
        </p>
        <ul className={styles.list}>
            <li>They leverage trust of entities (ie, Optimism, Arbitrum)</li>
            <li>Introduce fragmentation issues and are intra- not interoperable (e.g. Optimism's interoperability remains within Superchain chains).</li>
            <li>L2s with centralized sequencers can "compete with L1", MEV can be captured by sequencers on L2.</li>
            <li>Not fully censorship resistant and not credible neutral: sequencers may indefinitely censor transactions – although not fully true, forced transactions are still possible.</li>
            <li>Are central point of failure. On traditional rollups, if a centralized sequencer goes offline or becomes unavailable, the recovery time can be too long and transaction finality can be delayed. Users must resort to L1 as an escape hatch.</li>
        </ul>
        <br /><br />
        
        <h1>Benefits of a Based Rollup</h1>
        <p>
          Based rollups offer a sequencing design that leverages Ethereum's own consensus mechanism, eliminating reliance on centralized entities.<br /><br />
          Some of the key benefits include:
        </p>
        <ul className={styles.list}>
          <li><strong>Ethereum-grade liveness:</strong> If a proposer fails, the next L1 proposer simply includes the transaction. There's no centralized sequencer to halt the chain or delay finality.</li>
          <li><strong>Maximal security:</strong> Based sequencing inherits Ethereum's security guarantees. (With some caveats — see "Gateways" in a later article.)</li>
          <li><strong>Economic alignment:</strong> MEV flows back to Ethereum, preserving and reinforcing L1 network effects rather than fragmenting them.</li>
          <li><strong>Synchronous composability:</strong> Based rollups can access and react to L1 state within the same block, enabling seamless inter-rollup and L1↔L2 interactions — no bridges, no delays.</li>
          <li><strong>Infra reuse:</strong> Apps can rely on L1-native tooling (like oracles) without duplicating infrastructure. This is especially valuable for smaller appchains that can't afford to build everything from scratch.</li>
          <li><strong>No token-based sequencing overhead:</strong> Since Ethereum does the sequencing, there's no need to verify L2 signatures or maintain separate escape hatches — reducing complexity and attack surface.</li>
          <li><strong>Asset resilience:</strong> If a based rollup shuts down, its assets don't immediately go to zero. Value can persist on Ethereum itself (e.g. Base's memecoins, Zora's NFTs).</li>
        </ul>
        <br /><br />

        <h1>Drawbacks of a Based Rollup</h1>
        <p>
          While based rollups offer strong alignment with Ethereum, they also come with important trade-offs:<br /><br />
        </p>
        <ul className={styles.list}>
          <li><strong>L1 performance constraints:</strong> Tying sequencing to Ethereum means inheriting its block times and upgrade cycles. Transactions confirm every ~12 seconds by default. Preconfirmations can mitigate this, offering faster UX despite the base latency.</li>
          <li><strong>Architectural complexity:</strong> Based rollups require significant engineering effort — redesigning validator subsets for sequencing, supporting preconfirmations, and building gateway mechanisms adds considerable complexity to implementation.</li>
          <li><strong>Loss of sequencer revenue:</strong> Centralized sequencers today generate fees and extract MEV. Based rollups shift that revenue to Ethereum validators, reducing potential earnings for rollup teams or token-based ecosystems.</li>
          <li><strong>Data availability bottlenecks:</strong> Based rollups depend on Ethereum for DA. A highly active rollup may face elevated fees or need to limit throughput due to limited L1 block space — unless using alternatives like AltDA providers (e.g. <a href="https://twitter.com/rise_chain" target="_blank" rel="noopener noreferrer" className={styles.twitterLink}>@rise_chain</a>).</li>
          <li><strong>Design flexibility is still essential:</strong> Not all rollups will—or should—go based. The broader ecosystem must support a variety of sequencing models to meet different project needs and trade-offs.</li>
        </ul>
        <br /><br />

        <h1>A Short Note on Synchronous Composability</h1>
        <p>
        Using Ethereum consensus for sequencing enables <em>synchronous composability</em> — effectively giving rollups the benefits of a shared sequencer. Since Ethereum builds both L1 and L2 blocks simultaneously, actions in an L1 block can immediately impact the rollup.<br /><br />
        This allows contracts to call other contracts within the same block, interact across rollups, and move liquidity seamlessly between chains — all without added bridging complexity or latency.
        </p>
        <ul className={styles.list}>
            <li>👍 Less fragmentation across rollups and apps</li>
            <li>👍 Seamless user experience with unified state access</li>
            <li>👍 Improved developer experience — fewer cross-chain workarounds</li>
            <li>👎 ~12 second <em>soft confirmation times</em>, tied to Ethereum's block cadence. Centralized sequencers already solved this; based rollups will need <strong>preconfirmation mechanisms</strong> to match that speed.</li>
        </ul>
        <br /><br />
        <h1>Sequencing Design Options</h1>
        <p>
        Different teams are exploring how to implement based sequencing in various ways. Below is a comparison of different approaches:
        </p>

        <table className={styles.table}>
        <thead>
            <tr>
            <th>Model</th>
            <th>Sequencer Election</th>
            <th>Preconfirmations</th>
            <th>MEV Handling</th>
            <th>Examples</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td><code>Total Anarchy</code></td>
            <td>None</td>
            <td>No</td>
            <td>Leaks to L1</td>
            <td>
                Taiko model,<br />
                Originally <a href="https://www.notion.so/Based-Rollups-Preconfirmations-14a8e6664b2b805aa4fdc4a4149c337a?pvs=21" target="_blank">proposed by Justin Drake</a> and <a href="https://vitalik.ca/general/2021/01/05/rollup.html" target="_blank">referenced by Vitalik</a>.
            </td>
            </tr>
            <tr>
            <td><code>Vanilla Based Sequencing</code></td>
            <td>Random election of proposers before block</td>
            <td>Yes</td>
            <td>Sequencing MEV is captured by L1 proposer (hard to quantify)</td>
            <td><a href="https://hackmd.io/@Perseverance/rJ0nun5yR" target="_blank">Lime Chain</a></td>
            </tr>
            <tr>
            <td><code>Complex Sequencer Election</code></td>
            <td>Auction-based in-between layer; not direct delegation</td>
            <td>Yes</td>
            <td>Measurable, design-dependent</td>
            <td>Gwyneth, Spire, Espresso</td>
            </tr>
        </tbody>
        </table>
        <br />
        <h1>Block Building Design</h1>
        <p>
        Block building design helps explain why preconfirmations are necessary for performance and composability:
        </p>

        <table className={styles.table}>
        <thead>
            <tr>
            <th>Model</th>
            <th>Built</th>
            <th>Block Times</th>
            <th>Composability</th>
            <th>Examples</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>Total Anarchy</td>
            <td>Locally in L2, anyone can propose to L1</td>
            <td>Up to 12s (matches L1 worst-case)</td>
            <td>Dependent on L2 block time</td>
            <td>Taiko Alethia</td>
            </tr>
            <tr>
            <td>Opt-in Proposers</td>
            <td>Subset of L1 proposers opt into a Gateway registry</td>
            <td>Potentially sub-12s if bootstrapped more than 20% validators</td>
            <td>Atomic & synchronous composability</td>
            <td>Everyone else, future Taiko (not Facet)</td>
            </tr>
        </tbody>
        </table>

        <p>
        To enable fast composability and inclusion confidence, we need:
        <strong> high-performance validators + preconfirmations.</strong>
        </p>
        <br /><br />
        <h1>What Do We Need for Based Rollups?</h1>
        <ol className={styles.list}>
        <li>
            <strong>Preconfirmations:</strong> Users need confidence their transactions will be included. With optimized proving, preconfirmations can match centralized sequencer UX (100ms). However, proposer assignment and tip negotiation are non-trivial problems.
        </li>
        <li>
            <strong>Inclusion Lists:</strong> Allow validators to force builders to include transactions they've preconfirmed. This ensures delivery and avoids censorship.
            <ul>
            <li>Inclusion logic gets tricky (e.g., swap txs vary by price).</li>
            <li>Requires additional validity and inclusion correctness proofs.</li>
            </ul>
        </li>
        <li>
            <strong>Coordination:</strong> Based composability only works if others use it too. Tools and infrastructure should support rollup teams in the transition.
        </li>
        <li>
            <strong>Slashing:</strong> For credible commitments, validators must be slashable (e.g., via restaking protocols) if they violate preconfirmation promises or omit transactions.
        </li>
        <li>
            <strong>Data Availability (DA) Improvements:</strong> Based rollups depend on cheap Ethereum DA. To remain competitive, we must increase blob capacity and throughput to avoid rollup fee spikes or forced throughput limits.
        </li>
        <li>
            <strong>Faster Proving:</strong> Validity proofs must be included quickly in L1 to finalize L2 blocks. Current bottlenecks (e.g., in ZK rollups) can be eased by TEEs, ZK ASICs, or intermediate finality layers like Espresso. Delaying proof introduces risk of invalid block finality stalls.
        </li>
        </ol>
        <br /><br />
        <br /><br />

        <h1>The Road to (Better) Based Rollups</h1>
        <p>
        How can we reduce confirmation times while maintaining security guarantees — 
        <em>without introducing centralization?</em>
        </p>

        
        <h3>Based Preconfirmations</h3>
        <p>
        <code>Preconfirmations</code> are commitments from <strong>validators</strong> to <strong>users</strong>,
        guaranteeing that a transaction will be included. They can be interpreted as execution futures:
        the sequencer "sells" inclusion, priced to reflect expected MEV. Preconfirmations are also commitments
        to Ethereum's actual future state.
        </p>

        <blockquote className={styles.quote}>
        Main goal: L1 proposer confirms L2 transactions
        </blockquote>

        <p>
        Without preconfirmations, based rollups inherit Ethereum's ~12s confirmation delay. Preconfs are essential to make based rollups competitive with centralized sequencers.
        </p>

        <ul className={styles.list}>
        <li>👍 Faster confirmation times</li>
        <li>💫 Stronger assurances and credible commitments</li>
        <li>
            🥴 If poorly designed:
            <ul>
            <li>Limited confirmation availability</li>
            <li>Higher latency</li>
            <li>Slower blocks and reduced composability with other chains</li>
            </ul>
        </li>
        </ul>

        <p>
        Another alternative to achieve faster confirmations is reducing L1 block time (e.g., from 12s to 2s).
        But this raises bandwidth and sync demands on validators, which favors large-scale operators over home stakers —
        threatening decentralization.
        </p>

        <p>
        There is no consensus on a single design yet. Open questions remain around execution tickets, validator auctions,
        and sequencing mechanics — with different teams exploring different paths.
        </p>
        <br />

        <h3>How Confirmations Work</h3>
        <p>
        Preconfirmations use the Beacon Chain's "lookahead" feature — validators know the next proposer for one epoch (32 slots).
        </p>

        <p>
        In this design:
        </p>
        <ol className={styles.list}>
        <li>The user (or dApp) sends an RPC request to the upcoming <strong>sequencer proposer</strong> requesting transaction inclusion.</li>
        <li>If a <code>promise</code> is returned, the user now has a preconfirmation that their transaction will be included.</li>
        <li>This confirmation is <em>gossiped</em> across the network so that the next <strong>includer proposer</strong> can fulfill it.</li>
        </ol>

        <p>
        Sequencer proposers should only confirm up to ~30M gas to avoid overcommitting more than a single slot can fit.
        </p>
        <br /> <br />

        <h3>Proving</h3>
        <p>
        In based rollups, a block must be <strong>proved</strong> before the next one can be created. 
        This means every new block includes the proof for the previous one — and proving becomes a bottleneck.
        </p>

        <p>
        SNARK proofs currently take several minutes to generate, meaning user transactions may not be considered complete until much later. This is a critical challenge.
        </p>

        <p>Real-time proving could unlock major benefits:</p>
        <ul className={styles.list}>
        <li>Native synchronous composability across L1 and L2</li>
        <li>More time left for building the block (faster iteration)</li>
        <li>Enables programmable shards or native rollups with EVM equivalence</li>
        <li>Higher block throughput</li>
        </ul>

        <blockquote className={styles.quote}>
        Goal: Fast proving and aggregation → post transaction proofs to L1 faster
        </blockquote>

        <p>
        Real-time or near real-time proving enables real-time settlement, increasing the synchrony window within a block. More transactions can be composable and confirmed in the same block.
        </p>

        <p>
        Proving speeds could be improved via alternative staking networks — but ZK rollups may still face challenges in proving state transitions efficiently. Hardware matters here: GPUs, ASICs, or other accelerators drastically reduce proving latency.
        </p>

        <p>
        There's much more to be explored about the role of hardware in enabling faster based rollups — but for now, let's look at the current landscape.
        </p>

        <br /><br />

        <h1>Based Rollup Landscape</h1>

        <p>
        This is not meant to be an exhaustive list, but rather a snapshot of the landscape as of March 2025.
        </p>

        <table className={styles.table}>
        <thead>
            <tr>
            <th>Project</th>
            <th>Is Fork?</th>
            <th>DA</th>
            <th>Sequencer & Preconfs</th>
            <th>Proving System</th>
            <th>Comments</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td><code>Taiko (Alethia)</code></td>
            <td>No</td>
            <td>Ethereum</td>
            <td>
                Proposer not elected beforehand; sequencer ≠ proposer.<br />
                No preconfs — waits for L1 inclusion.<br />
                Will integrate Nethermind AVS.
            </td>
            <td>–</td>
            <td>Uses public mempool.</td>
            </tr>
            <tr>
            <td><code>Gwyneth (Taiko)</code></td>
            <td>No (boosted rollup incubated by Taiko)</td>
            <td>Ethereum</td>
            <td>
                Complex Sequencer Election model with preconfirmations.
            </td>
            <td>
                Real-time proving + multiprover system<br />
                for synchronous L1 calls.
            </td>
            <td>
                Exploring TEEs for cross-L2 txs.<br />
                High throughput via parallelism — many identical L2s to spread load (low hardware reqs).
            </td>
            </tr>
            <tr>
            <td><code>Facet</code></td>
            <td>Optimism fork</td>
            <td>Ethereum (state roots not posted to L1)</td>
            <td>
                Forced inclusion similar to L1 guarantees.<br />
                No preconfs.
            </td>
            <td>–</td>
            <td>Sovereign rollup.</td>
            </tr>
            <tr>
            <td><code>Spire</code></td>
            <td>OP Stack (with major mods)</td>
            <td>Ethereum</td>
            <td>
                Complex Sequencer Election model<br />
                with preconfirmations.
            </td>
            <td>–</td>
            <td>Will open source the stack to enable reuse.</td>
            </tr>
            <tr>
            <td><code>Rise</code></td>
            <td>OP Stack + Rust on Reth</td>
            <td>Alt DA</td>
            <td>Preconfirmations</td>
            <td>–</td>
            <td>
                Aims to handle giga gas (high perf. L2).<br />
                Uses Verkle trees (not ultrasound compatible).
            </td>
            </tr>
            <tr>
            <td><code>Puffer Unify</code></td>
            <td>No (optimistic-based rollup)</td>
            <td>Ethereum</td>
            <td>
                Sequencing via Puffer LRT validators.<br />
                Preconfirmations with Puffer Slasher AVS.<br />
                Preconfs guarantee outcome (mitigates MEV).
            </td>
            <td>
                Own prover infra, block proving on Intel SGX (TEE)
            </td>
            <td>
                LSTs accessible without bridging.<br />
                Native yield via LRT.
            </td>
            </tr>
            <tr>
            <td><code>Surge (Nethermind)</code></td>
            <td>Taiko fork</td>
            <td>Ethereum (assumed)</td>
            <td>Preconfirmations via Nethermind AVS</td>
            <td>–</td>
            <td>Likely to become infra layer for launching based rollups.</td>
            </tr>
            <tr>
            <td><code>Rogue</code></td>
            <td>No</td>
            <td>Ethereum</td>
            <td>
                TBD<br />
                Preconfirmations planned
            </td>
            <td>
                STARKs with KZG wrapper<br />
                Includes mining mechanism via proving
            </td>
            <td>
                Uses <code>ethrex</code> (Rust client by LambdaClass).<br />
                Aiming for native EVM compatibility.
            </td>
            </tr>
            <tr>
            <td><code>Name Chain (ENS)</code></td>
            <td>TBD</td>
            <td>TBD (likely Ethereum)</td>
            <td>No need for sequencer</td>
            <td>TBD</td>
            <td>–</td>
            </tr>
        </tbody>
        </table>
      </section>
      <BackToTop />
    </div>
  );
} 