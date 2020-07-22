export class Quotes {
    showQuoteInFull: boolean;
    likeCount: number;
    dislikeCount: number;
    constructor(
        public id: number,
        public submitter: string,
        public quoter: string,
        public quoteText: string,
        public postDate: Date
    ) {
        this.showQuoteInFull = false;
        this.likeCount = 0;
        this.dislikeCount = 0;
    }
}