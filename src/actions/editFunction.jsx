export async function editItem(item) {
    const findElemIdResponse = await fetch(`http://localhost:3000/findItem/${item.company}`);

    if (!findElemIdResponse.ok) {
        throw new Error('Ошибка при поиске элемента');
    }
    const findElemIdData = await findElemIdResponse.json();
    const findElemId = findElemIdData.id;

    if (window.confirm('Вы уверены, что хотите изменить этот элемент?')) {
        return findElemId;
    }
}
