import React from 'react'
// 引入编辑器组件
import BraftEditor from 'braft-editor'
// 引入编辑器样式
import 'braft-editor/dist/index.css'
import './index.css'

const fontFamilies = [
    {
        name: '默认字体',
        family: 'normal'
    },
    {
        name: '方正超粗黑体',
        family: 'FZCCHK'
    }, {
        name: '方正仿宋',
        family: 'FZFSK'
    }, {
        name: '方正黑体',
        family: 'FZHTK'
    }, {
        name: '方正楷体',
        family: 'FZKTK'
    }, {
        name: '方正隶书',
        family: 'FZLSK'
    }, {
        name: '方正书宋',
        family: 'FZSSK'
    }, {
        name: '方正小标宋',
        family: 'FZXBSK'
    }
]
export default class Editor extends React.Component {

    state = {
        // 创建一个空的editorState作为初始值
        editorState: BraftEditor.createEditorState(null)
    }
    constructor(props) {
        super(props);
        this.state.editorState = BraftEditor.createEditorState(props.value||null, { fontFamilies })
    }
    handleEditorChange = (editorState) => {
        this.setState({ editorState })
        this.props.onChange(editorState.toHTML())
    }

    render () {
        const { editorState } = this.state
        const controls = [
            'undo', 'redo', 'separator',
            'font-size', {
                key: 'font-family', 
                title: '默认字体', 
            } ,{
                key: 'line-height', 
                title: '默认行高', 
            } , 'letter-spacing', 'separator',
            'text-color', 'bold', 'italic', 'underline', 'strike-through', 'separator',
            'superscript', 'subscript', 'remove-styles', 'emoji',  'separator', 'text-indent', 'text-align', 'separator',
            'headings', 'list-ul', 'list-ol', 'blockquote', 'code', 'separator',
            'link', 'separator', 'hr', 'separator',
            'media', 'separator',
            'clear'
        ]
        const lineHeights = [1.75 , 1 , 1.2, 1.5, 2, 2.5, 3, 4]
        const {stateIs} = this.props
        return (
            <div className="my-component" style={{border:'1px solid rgba(0, 0, 0, 0.2)'}} controls={controls}>
                <BraftEditor
                    onChange={this.handleEditorChange}
                    value={this.state.editorState}
                    readOnly={stateIs==1?true:false}
                    lineHeights={lineHeights}
                    fontFamilies={fontFamilies}
                    controls={controls}
                />
            </div>
        )

    }

}