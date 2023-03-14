import { Connection, PublicKey, Commitment, ConnectionConfig, TransactionInstruction, Signer } from "@solana/web3.js";
import { Wallet } from "@coral-xyz/anchor";
import { InstructionAccount, ManagedProgramAccount, MultisigAccount, ProgramManagerAccount, ProgramUpgradeAccount, TransactionAccount } from "./types";
import { TransactionBuilder } from "./tx_builder";
declare class Squads {
    readonly connection: Connection;
    readonly wallet: Wallet;
    private readonly provider;
    readonly multisigProgramId: PublicKey;
    private readonly multisig;
    readonly programManagerProgramId: PublicKey;
    private readonly programManager;
    constructor({ connection, wallet, multisigProgramId, programManagerProgramId, }: {
        connection: Connection;
        wallet: Wallet;
        multisigProgramId?: PublicKey;
        programManagerProgramId?: PublicKey;
    });
    static endpoint(endpoint: string, wallet: Wallet, options?: {
        commitmentOrConfig?: Commitment | ConnectionConfig;
        multisigProgramId?: PublicKey;
        programManagerProgramId?: PublicKey;
    }): Squads;
    static mainnet(wallet: Wallet, options?: {
        commitmentOrConfig?: Commitment | ConnectionConfig;
        multisigProgramId?: PublicKey;
        programManagerProgramId?: PublicKey;
    }): Squads;
    static devnet(wallet: Wallet, options?: {
        commitmentOrConfig?: Commitment | ConnectionConfig;
        multisigProgramId?: PublicKey;
        programManagerProgramId?: PublicKey;
    }): Squads;
    static localnet(wallet: Wallet, options?: {
        commitmentOrConfig?: Commitment | ConnectionConfig;
        multisigProgramId?: PublicKey;
        programManagerProgramId?: PublicKey;
    }): Squads;
    private _addPublicKeys;
    getTransactionBuilder(multisigPDA: PublicKey, authorityIndex: number): Promise<TransactionBuilder>;
    getMultisig(address: PublicKey, commitment?: string): Promise<MultisigAccount>;
    getMultisigs(addresses: PublicKey[], commitment?: string): Promise<(MultisigAccount | null)[]>;
    getTransaction(address: PublicKey, commitment?: string): Promise<TransactionAccount>;
    getTransactions(addresses: PublicKey[]): Promise<(TransactionAccount | null)[]>;
    getInstruction(address: PublicKey): Promise<InstructionAccount>;
    getInstructions(addresses: PublicKey[]): Promise<(InstructionAccount | null)[]>;
    getProgramManager(address: PublicKey): Promise<ProgramManagerAccount>;
    getProgramManagers(addresses: PublicKey[]): Promise<(ProgramManagerAccount | null)[]>;
    getManagedProgram(address: PublicKey): Promise<ManagedProgramAccount>;
    getManagedPrograms(addresses: PublicKey[]): Promise<(ManagedProgramAccount | null)[]>;
    getProgramUpgrade(address: PublicKey): Promise<ProgramUpgradeAccount>;
    getProgramUpgrades(addresses: PublicKey[]): Promise<(ProgramUpgradeAccount | null)[]>;
    getNextTransactionIndex(multisigPDA: PublicKey): Promise<number>;
    getNextInstructionIndex(transactionPDA: PublicKey): Promise<number>;
    getNextProgramIndex(programManagerPDA: PublicKey): Promise<number>;
    getNextUpgradeIndex(managedProgramPDA: PublicKey): Promise<number>;
    getAuthorityPDA(multisigPDA: PublicKey, authorityIndex: number): PublicKey;
    private _createMultisig;
    createMultisig(threshold: number, createKey: PublicKey, initialMembers: PublicKey[], name?: string, description?: string, image?: string): Promise<MultisigAccount>;
    buildCreateMultisig(threshold: number, createKey: PublicKey, initialMembers: PublicKey[], name?: string, description?: string, image?: string): Promise<TransactionInstruction>;
    private _createTransaction;
    createTransaction(multisigPDA: PublicKey, authorityIndex: number): Promise<TransactionAccount>;
    buildCreateTransaction(multisigPDA: PublicKey, authorityIndex: number, transactionIndex: number): Promise<TransactionInstruction>;
    private _addInstruction;
    addInstruction(transactionPDA: PublicKey, instruction: TransactionInstruction): Promise<InstructionAccount>;
    buildAddInstruction(multisigPDA: PublicKey, transactionPDA: PublicKey, instruction: TransactionInstruction, instructionIndex: number): Promise<TransactionInstruction>;
    private _activateTransaction;
    activateTransaction(transactionPDA: PublicKey): Promise<TransactionAccount>;
    buildActivateTransaction(multisigPDA: PublicKey, transactionPDA: PublicKey): Promise<TransactionInstruction>;
    private _approveTransaction;
    approveTransaction(transactionPDA: PublicKey): Promise<TransactionAccount>;
    buildApproveTransaction(multisigPDA: PublicKey, transactionPDA: PublicKey): Promise<TransactionInstruction>;
    private _rejectTransaction;
    rejectTransaction(transactionPDA: PublicKey): Promise<TransactionAccount>;
    buildRejectTransaction(multisigPDA: PublicKey, transactionPDA: PublicKey): Promise<TransactionInstruction>;
    private _cancelTransaction;
    cancelTransaction(transactionPDA: PublicKey): Promise<TransactionAccount>;
    buildCancelTransaction(multisigPDA: PublicKey, transactionPDA: PublicKey): Promise<TransactionInstruction>;
    private _executeTransaction;
    executeTransaction(transactionPDA: PublicKey, feePayer?: PublicKey, signers?: Signer[]): Promise<TransactionAccount>;
    buildExecuteTransaction(transactionPDA: PublicKey, feePayer?: PublicKey): Promise<TransactionInstruction>;
    private _executeInstruction;
    executeInstruction(transactionPDA: PublicKey, instructionPDA: PublicKey): Promise<InstructionAccount>;
    buildExecuteInstruction(transactionPDA: PublicKey, instructionPDA: PublicKey): Promise<TransactionInstruction>;
    createProgramManager(multisigPDA: PublicKey): Promise<ProgramManagerAccount>;
    createManagedProgram(multisigPDA: PublicKey, programAddress: PublicKey, name: string): Promise<ManagedProgramAccount>;
    createProgramUpgrade(multisigPDA: PublicKey, managedProgramPDA: PublicKey, bufferAddress: PublicKey, spillAddress: PublicKey, authorityAddress: PublicKey, upgradeName: string): Promise<ProgramUpgradeAccount>;
    checkGetTopUpInstruction(publicKey: PublicKey): Promise<TransactionInstruction | null>;
}
export default Squads;
export { Wallet };
export * from "./constants";
export * from "./address";
export * from "./types";
