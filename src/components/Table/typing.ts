export interface TabelPropsType {
    url: string;
    tableData?: any[];
    showPagination?: boolean;
    immediate?: boolean;
    columns?: any[];
    requestParams?: any;
    pagination?: {
        sizeCanChange: boolean;
        showTotal: boolean;
        total: number;
        pageSize: number;
        current: number;
        pageSizeChangeResetCurrent: boolean;
    };
    onRef?: () => void;
}
