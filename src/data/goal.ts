export interface AssetPurchaseGoal {
    id: string;
    name: string;
    description: string;
    timeframe: {
        startDate: string;
        endDate: string;
        achievedDate?: string;
    },
    assetId: string;
}
