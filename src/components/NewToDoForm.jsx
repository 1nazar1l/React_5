export const NewToDoForm = ({newItem, setNewItem, handleSubmit}) => (
<form className="new-item-form" onSubmit={handleSubmit}>
    <div className="form-row">
        <label htmlFor="item">New item</label>
        <input type="text" id="item" value={newItem} onChange={(event) => setNewItem(event.target.value)}></input>
    </div>
    <button className="btn">Add</button>
</form>
)