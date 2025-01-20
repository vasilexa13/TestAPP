export const deleteItem = async (item, modalActive, setModalActive, fetchData) => {
    try {
        const findElemIdResponse = await fetch(`http://localhost:3000/findItem/${item.company}`);
        if (!findElemIdResponse.ok) {
            throw new Error('Ошибка при поиске элемента');
        }

        const findElemIdData = await findElemIdResponse.json();
        const findElemId = findElemIdData.id;

        if (window.confirm('Вы уверены, что хотите удалить этот элемент?')) {
            const response = await fetch(`http://localhost:3000/delete/${findElemId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                fetchData();
            } else {
                throw new Error('Ошибка при удалении элемента');
            }
        }
        // eslint-disable-next-line no-unused-vars
    } catch (error) {
        // setError(error);
    }
};

