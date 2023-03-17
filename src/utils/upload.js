const FileTypeMap = {
    image: 'image/*',
};
export const useUploadFile = (props) => {
    const { fileType } = props;
    const formData = new FormData();
    const uploadFun = (extraParams) => {
        return new Promise((resolve, reject) => {
            const els = document.querySelectorAll('[data-id="upload"]');
            els.forEach((item) => {
                item.remove();
            });
            const upload = document.createElement('input');
            upload.setAttribute('style', `display: none;`);
            upload.setAttribute('data-id', 'upload');
            upload.setAttribute('type', 'file');
            upload.setAttribute('accept', FileTypeMap[fileType]);
            document.body.appendChild(upload);
            upload.focus();
            upload.click();
            upload.addEventListener('change', async () => {
                if (upload.files) {
                    if (upload.files.length === 0)
                        reject(new Error('请选择文件'));
                    const file = upload.files[0];
                    if (file.size > 12582912)
                        reject(new Error('图片大小必须是12MB以内'));
                    //   const formData = new FormData();
                    const uploadParams = {
                        file,
                    };
                    appendData(formData, uploadParams);
                    let url = '';
                    if (fileType === 'image') {
                        const reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = function (ev) {
                            // base64码
                            url = ev.target.result; //或e.target都是一样的
                            resolve({ formData, url });
                        };
                    }
                    else {
                        // 组装请求数据
                        resolve({ formData });
                    }
                }
            });
        });
    };
    //   return uploadFun()
    return {
        formData,
        uploadFun,
    };
};
export function appendData(formData, data) {
    if (!data)
        return;
    Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
    });
}
//# sourceMappingURL=upload.js.map