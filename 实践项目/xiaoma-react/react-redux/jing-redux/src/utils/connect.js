import React , { PureComponent } from "react"
import  {StoreContext}  from "./context";

export function connect(mapStateToProps, mapDispachToProps) {
    // 返回一个高阶组件
    return function enhanceHOC(WrappedComponent) {
      class inhanceClass extends PureComponent {
            constructor(props, context) {
                super(props, context);

                this.state = {
                    storeState: mapStateToProps(context.getState())
                }
            }
            componentDidMount() {
                this.unsubscribe = this.context.subscribe(() => {
                    this.setState({
                        storeState: mapStateToProps(this.context.getState())
                    })
                })
            }

            componentWillUnmount() {
                this.unsubscribe()
            }
            render() {
                return <WrappedComponent
                    {...this.props}
                    {...mapStateToProps(this.context.getState())}
                    {...mapDispachToProps(this.context.dispatch)}
                />
            }
        }

        inhanceClass.contextType = StoreContext
        return inhanceClass
    }
}