import { Table as ATable } from '@arco-design/web-react';
import { useEffect, useState } from 'react';
import { useGet } from '../../utils/axios';

const defaultProps: TabelPropsType = {
    url: '',
    showPagination: true,
    pagination: {
        sizeCanChange: true,
        showTotal: true,
        total: 100,
        pageSize: 10,
        current: 1,
        pageSizeChangeResetCurrent: true,
    },
    columns: [],
    requestParams: {},
    immediate: true,
};

export default function useTable(props: TabelPropsType) {
    const propsRef = Object.assign({}, defaultProps, props);

    const [tableData, setTableData] = useState<any>([]);
    const [pagination, setPagination] = useState(propsRef.pagination);

    const fetchData = async (current?: number, pageSize?: number) => {
        const res: any = await useGet(props.url, {
            ...propsRef.requestParams,
            current: current || pagination?.current,
            pageSize: pageSize || pagination?.pageSize,
        });
        setPagination({ ...pagination, ...res.page });

        setTableData(
            (res?.data || []).map((item: any, index: number) => {
                return {
                    ...item,
                    key: index,
                };
            }),
        );
    };

    const onChangeTable = (page: any) => {
        fetchData(page.current);
    };

    const setData = (data: any[]) => {
        setTableData(
            (data || []).map((item, index) => {
                return {
                    ...item,
                    key: index,
                };
            }),
        );
        if (pagination) {
            setPagination({
                ...pagination,
                current: 1,
                pageSize: data.length,
            });
        }
    };

    useEffect(() => {
        if (propsRef.immediate) {
            fetchData();
        }
    }, []);

    const Table = () => {
        return (
            <div className='mt-8px'>
                <ATable
                    data={tableData}
                    columns={propsRef.columns}
                    pagination={pagination}
                    onChange={onChangeTable}
                />
            </div>
        );
    };

    return {
        Table,
        setData,
        fetchData,
    };
}
