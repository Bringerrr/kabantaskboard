const interfaceConst = 'interface';

module.exports = (componentName) => `import { classNames } from 'src/shared/lib/classnames/classNames';
import cls from './${componentName}.module.scss';

${interfaceConst} ${componentName}Props {
    className?: string;
}

export const ${componentName} = (props: ${componentName}Props) => {
    const { className } = props;
    
    return (
        <div className={classNames(cls.${componentName}, {}, [className])}>
           
        </div>
    );
};`;
